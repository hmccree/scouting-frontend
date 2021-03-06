import { h } from 'preact'

import { getEvent, getEventAnalysis, getSchema } from '../../../api'
import Resolver from '../../../resolver'

import Header from '../../../components/header'
import Table from '../../../components/table'

import style from './style.css'

const EventAnalysis = ({ eventId }: { eventId: string }) => (
  <Resolver
    data={{
      event: getEvent(eventId),
      eventAnalysis: getEventAnalysis(eventId),
      schema: getSchema()
    }}
    render={({ event, eventAnalysis, schema }) => (
      <div class={style.eventAnalysis}>
        <Header
          title={`Analysis - ${(event && event.shortName) || eventId}`}
          back={`/events/${eventId}`}
        />
        {schema &&
          eventAnalysis && (
            <Table
              back={`/events/${eventId}/analysis`}
              eventKey={eventId}
              schema={schema}
              analyses={eventAnalysis}
            />
          )}
      </div>
    )}
  />
)

export default EventAnalysis
