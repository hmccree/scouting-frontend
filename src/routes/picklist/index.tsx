import { polyfill } from 'mobile-drag-drop'
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour'
import { PickList } from 'models/picklist'
import { Component, h } from 'preact'
import { getPickList, getTeamsAtEvent, updatePickList } from '../../api'
import Button from '../../components/button'
import ChooseTeam from '../../components/choose-team'
import EditableTitle from '../../components/editable-title'
import Icon from '../../components/icon'
import List from '../../components/list'
import Spinner from '../../components/spinner'
import Resolver from '../../resolver'
import { formatTeamNumber } from '../../utils'
import { pickList as pickListClass } from './style.sss'

polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
})

interface PickListProps {
  listId: string
  eventId: string
}

interface InnerPickListProps {
  list: PickList | null
  allTeams: string[] | null
}

interface InnerPickListState {
  teams: string[] | null
  draggingTeam: string | null
  title: string | null
}

const PickList = ({ listId, eventId }: PickListProps) => (
  <Resolver
    data={{ list: getPickList(listId), allTeams: getTeamsAtEvent(eventId) }}
    render={
      class InnerPickList extends Component<
        InnerPickListProps,
        InnerPickListState
      > {
        constructor() {
          super()
          this.state = { teams: null, draggingTeam: null, title: null }
        }

        syncList = (state: InnerPickListState = this.state) => {
          if (this.props.list !== null) {
            updatePickList(this.props.list.id, {
              eventKey: this.props.list.eventKey,
              name: state.title !== null ? state.title : this.props.list.name,
              list: this.getTeams(state)
            })
          }
        }

        getTeams = (s: InnerPickListState) => {
          if (s.teams === null) {
            return this.props.list === null || this.props.list.list === null
              ? []
              : this.props.list.list
          }
          return s.teams
        }

        addTeam = (team: string) => {
          this.setState((s: InnerPickListState) => {
            s.teams = this.getTeams(s).concat(team)
            this.syncList(s)
            return s
          })
        }

        removeTeam = (team: string) => (e: Event) => {
          e.preventDefault()
          this.setState((s: InnerPickListState) => {
            s.teams = this.getTeams(s).filter(t => t !== team)
            this.syncList(s)
            return s
          })
        }

        dragStart = (t: string) => () => {
          this.setState({ draggingTeam: t })
        }

        dragEnd = (t: string) => () => {
          this.setState({ draggingTeam: null })
          this.syncList()
        }

        dragEnter = (team: string) => () => {
          this.setState((s: InnerPickListState) => {
            s.teams = this.getTeams(s).map(t => {
              if (t === team && s.draggingTeam !== null) {
                return s.draggingTeam
              } else if (t === s.draggingTeam) {
                return team
              }
              return t
            })
            return s
          })
        }

        setTitle = (newTitle: string) => {
          this.setState({ title: newTitle })
          this.syncList()
        }

        render(
          { allTeams, list }: InnerPickListProps,
          { teams: modifiedTeams, draggingTeam, title }: InnerPickListState
        ) {
          if (allTeams === null || list === null) {
            return <Spinner />
          }
          const teams =
            modifiedTeams !== null
              ? modifiedTeams
              : list.list !== null
                ? list.list
                : []

          return (
            <div class={pickListClass}>
              <EditableTitle
                onEdit={this.setTitle}
                value={title !== null ? title : list.name}
              />
              <List>
                {teams.map(t => (
                  <li key={t}>
                    <a
                      href={`/events/${eventId}/team/${formatTeamNumber(
                        t
                      )}?back=/events/${eventId}/lists/${listId}`}
                      data-dragging={t === draggingTeam}
                      onDragEnter={this.dragEnter(t)}
                    >
                      {formatTeamNumber(t)}
                      <a onClick={this.removeTeam(t)}>
                        <Icon icon="trash" />
                      </a>
                      <span
                        draggable
                        onDragStart={this.dragStart(t)}
                        onDragEnd={this.dragEnd(t)}
                      >
                        ☰
                      </span>
                    </a>
                  </li>
                ))}
              </List>
              <ChooseTeam
                render={({ onClick }) => (
                  <Button onClick={onClick}>Add Team</Button>
                )}
                onChoose={this.addTeam}
                choices={allTeams.filter(t => !teams.includes(t))}
              />
            </div>
          )
        }
      }
    }
  />
)

export default PickList
