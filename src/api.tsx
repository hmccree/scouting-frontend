import { get as idbGet, set as idbSet } from 'idb-keyval'
import Analysis from './models/analysis'
import FRCEvent from './models/frc-event'
import Match from './models/match'
import Report from './models/report'
import Schema from './models/schema'
import { User } from './models/user'

import { getJWT, hasValidJWT } from './utils'

const endpoint = 'https://api.pigmice.ga:8081'

export interface Req {
  path: string
  method: string
  body?: string
}

const addRequestToIdb = async (request: Req) => {
  const currentRequests = (await idbGet('cachedRequests')) as Req[] | undefined
  if (currentRequests === undefined) {
    await idbSet('cachedRequests', [request])
    return 1
  }
  await idbSet('cachedRequests', currentRequests.concat(request))
  return currentRequests.length + 1
}

const queryAPI = (
  path: string,
  method: string = 'GET',
  body?: any
): Promise<any> =>
  fetch(`${endpoint}/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: hasValidJWT(getJWT())
      ? new Headers({ Authentication: `Bearer ${getJWT()}` })
      : undefined
  }).catch(async (error: Error) => {
    if (method !== 'GET') {
      await addRequestToIdb({ path, method, body })
    }
    throw error
  })

const get = <T extends {}>(url: string) => (
  cb: (err: Error | null, data: T | null) => any
) => {
  let gotten = false
  idbGet<T>(url).then(val => {
    if (!gotten) {
      cb(null, val === undefined ? undefined : val)
    }
  })
  try {
    queryAPI(url)
      .then(d => d.json())
      .then(data => {
        cb(null, data)
        idbSet(url, data)
        gotten = true
      })
  } catch (error) {
    cb(error, undefined)
  }
}

const getEvents = () => get<FRCEvent[]>('events')

const getEvent = (eventKey: string) => async (
  cb: (err: Error | null, data: FRCEvent | null) => any
) => {
  get<FRCEvent>(`events/${eventKey}`)((err: Error, data: FRCEvent) => {
    if (err) {
      cb(err, data)
    } else {
      if (
        data !== undefined &&
        data.matches !== undefined &&
        data.matches !== null
      ) {
        data.matches = data.matches
          .map(value => {
            if (!(value.time instanceof Date)) {
              value.time = new Date(value.actualTime || value.predictedTime)
            }
            return value
          })
          .sort(
            (a, b) =>
              (a.time === null ? 0 : a.time.getTime()) -
              (b.time === null ? 0 : b.time.getTime())
          )
      }
      cb(null, data)
    }
  })
}

const getEventAnalysis = (eventKey: string) =>
  get<Analysis[]>(`events/${eventKey}/analysis`)

const getMatch = (eventKey: string, matchKey: string) =>
  get<Match>(`events/${eventKey}/matches/${eventKey}_${matchKey}`)

const getSchema = () => get<Schema>('schema')

const getReporterStats = () =>
  get<{ reporter: string; reports: number }[]>('leaderboard')

const getTeamStats = (eventKey: string, team: string) =>
  get<Report[]>(`events/${eventKey}/teams/frc${team}/reports`)

const getUsers = () => get<User[]>('users')

const authenticate = (credentials: {
  username: string
  password: string
}): Promise<string> =>
  queryAPI('authenticate', 'POST', credentials).then(async resp => {
    if (resp.status < 200 || resp.status >= 300) {
      throw new Error(resp.status)
    }
    return (await resp.json()).jwt
  })

const registerUser = (credentials: {
  username: string
  password: string
}): Promise<string> =>
  queryAPI('users', 'POST', credentials).then(async resp => {
    if (resp.status < 200 || resp.status >= 300) {
      throw new Error(resp.status)
    }
    return null
  })

const submitReport = (
  team: string,
  eventKey: string,
  matchKey: string,
  stats: { [key: string]: boolean | number },
  notes?: string
) =>
  queryAPI(
    `events/${eventKey}/matches/${eventKey}_${matchKey}/reports`,
    'PUT',
    {
      team,
      stats,
      notes
    }
  )

const getAllianceAnalysis = (
  eventKey: string,
  matchKey: string,
  color: string
) =>
  get<Analysis[]>(
    `events/${eventKey}/matches/${eventKey}_${matchKey}/alliance/${color}/analysis`
  )

const deleteUser = (username: string) => queryAPI(`users/${username}`, 'DELETE')

const updateUser = (username: string, user: User) =>
  queryAPI(`users/${username}`, 'PUT', user)

const createUser = (user: User) => queryAPI(`users`, 'POST', user)

const getTeamsAtEvent = (eventId: string) =>
  get<string[]>(`events/${eventId}/teams`)

export {
  getEvents,
  getEvent,
  getEventAnalysis,
  getMatch,
  getAllianceAnalysis,
  getSchema,
  getReporterStats,
  getTeamsAtEvent,
  getUsers,
  deleteUser,
  authenticate,
  registerUser,
  submitReport,
  updateUser,
  createUser,
  queryAPI,
  getTeamStats
}
