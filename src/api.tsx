import FRCEvent from './models/frc-event'
import Match from './models/match'
import Schema from './models/schema'

const endpoint = 'https://api.pigmice.ga'
import { hasValidJWT, getJWT } from './utils'

const queryAPI = (
  path: string,
  method: string = 'GET',
  body?: any
): Promise<any> =>
  fetch(`${endpoint}/${path}`, {
    method,
    body: JSON.stringify(body),
    headers:
      hasValidJWT() && method !== 'GET'
        ? new Headers({ Authentication: `Bearer ${getJWT()}` })
        : undefined
  })

const getEvents = (): Promise<FRCEvent[]> =>
  queryAPI('events').then(d => d.json())

const getEvent = (eventKey: string): Promise<FRCEvent> =>
  queryAPI(`events/${eventKey}`).then(d => d.json())

const getMatch = (eventKey: string, matchKey: string): Promise<Match> =>
  queryAPI(`events/${eventKey}/${eventKey}_${matchKey}`).then(d => d.json())

const getSchema = (): Promise<Schema> => queryAPI('schema').then(d => d.json())

const authenticate = (credentials: {
  username: string
  password: string
}): Promise<string> =>
  queryAPI('authenticate', 'POST', credentials).then(async resp => {
    if (resp.status < 200 || resp.status >= 300) {
      throw new Error(resp.statusText)
    }
    return (await resp.json()).jwt
  })

const submitReport = (
  team: string,
  eventKey: string,
  matchKey: string,
  stats: { [key: string]: boolean | number }
) =>
  queryAPI(`reports/${eventKey}/${eventKey}_${matchKey}`, 'PUT', {
    team,
    stats
  })

export { getEvents, getEvent, getMatch, getSchema, authenticate, submitReport }
