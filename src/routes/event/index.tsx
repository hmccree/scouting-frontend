import { h } from 'preact'
import Resolver from '../../resolver'
import Header from '../../components/header'
import { getEvent } from '../../api'
import { parseMatchKey } from '../../utils'
import { event as eventClass } from './style.sss'
import List from '../../components/list'
import Spinner from '../../components/spinner'
import DateDisplay from '../../components/date-display'
import FRCEvent from '../../models/frc-event'

const Event = ({ eventId }: { eventId: string }) => (
  <Resolver
    data={{ event: getEvent(eventId) }}
    render={({ event }) => (
      <div class={eventClass}>
        <Header
          title={(event && event.shortName) || `Event ${eventId}`}
          back="/"
        />
        <DateDisplay date={event && event.date && new Date(event.date)} />
        {typeof event === 'undefined' ? (
          <Spinner />
        ) : event.matches === null || event.matches.length === 0 ? (
          <p>No Matches</p>
        ) : (
          <List>
            {event.matches
              .map(m => {
                m.time = new Date(m.actualTime || m.predictedTime)
                return m
              })
              .sort((a, b) => (a.time > b.time ? 1 : -1))
              .map(m => {
                const { matchKey } = parseMatchKey(m.key)
                return (
                  <li key={m.key}>
                    <a href={`/events/${event.key}/${matchKey}`}>
                      {matchKey.toUpperCase()}
                    </a>
                  </li>
                )
              })}
          </List>
        )}
      </div>
    )}
  />
)

export default Event