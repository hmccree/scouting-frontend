import { h, Component } from 'preact'
import linkState from 'linkstate'

import FRCEvent from '../../models/frc-event'
import Match from '../../models/match'
import Schema from '../../models/schema'

import { getEvent, getMatch, getSchema } from '../../api'
import { camelToTitle } from '../../utils'

import Resolver from '../../resolver'

import Header from '../../components/header'
import Toggle from '../../components/toggle'
import NumberPicker from '../../components/number-picker'

import { scout, fields } from './style.sss'

interface ScoutProps {
  event: FRCEvent
  match: Match
  schema: Schema
}

interface ScoutState {
  report: {
    [key: string]: number | boolean
  }
}

const Field = ({
  fieldType,
  fieldName,
  self
}: {
  fieldType: string
  fieldName: string
  self: any
}) => {
  return (
    <label for={fieldName}>
      <span>{camelToTitle(fieldName)}</span>
      {fieldType === 'bool' ? (
        <Toggle
          onChange={linkState(self, `report.${fieldName}`, 'target.checked')}
          id={fieldName}
        />
      ) : fieldType === 'number' ? (
        <NumberPicker
          onChange={linkState(self, `report.${fieldName}`)}
          id={fieldName}
        />
      ) : (
        <div>Hiya</div>
      )}
    </label>
  )
}

const Scout = ({ eventId, matchId }: { eventId: string; matchId: string }) => (
  <Resolver
    data={{
      event: getEvent(eventId),
      match: getMatch(eventId, matchId),
      schema: getSchema()
    }}
    render={
      class extends Component<ScoutProps, ScoutState> {
        constructor() {
          super()
          this.state = {
            report: {}
          }
        }
        render({ event, match, schema }: ScoutProps, { report }: ScoutState) {
          const eventName = (event && event.shortName) || eventId
          console.log(report)
          if (schema && Object.keys(report).length === 0) {
            this.setState((state: ScoutState) => {
              Object.keys(schema).map(fieldName => {
                const fieldType = schema[fieldName]
                if (!state.report[fieldName]) {
                  state.report[fieldName] = fieldType === 'bool' ? false : 0
                }
              })
              return state
            })
          }
          return (
            <div class={scout}>
              <Header
                title={`Scout - ${matchId.toUpperCase()} - ${eventName}`}
                back={`/events/${eventId}/${matchId}`}
              />
              <div class={fields}>
                {Object.keys(schema || {}).map(fieldName => (
                  <Field
                    fieldName={fieldName}
                    fieldType={schema[fieldName]}
                    self={this}
                  />
                ))}
              </div>
            </div>
          )
        }
      }
    }
  />
)

export default Scout
