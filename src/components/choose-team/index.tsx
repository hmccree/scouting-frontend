import { Component, h } from 'preact'
import Portal from 'preact-portal'
import { formatTeamNumber } from '../../utils'
import Icon from '../icon'
import { teamChooser } from './style.sss'

interface Props {
  render: (props: { onClick: () => void }) => JSX.Element
  onChoose: (team: string) => any
  choices: string[]
}

interface State {
  visible: boolean
  query: string
  input: HTMLInputElement | null
}

export default class ChooseTeam extends Component<Props, State> {
  constructor() {
    super()
    this.state = { visible: false, query: '', input: null }
  }

  hide = () => {
    this.setState((s: State) => {
      s.visible = false
      s.query = ''
      return s
    })
  }

  show = () => {
    this.setState({ visible: true })
  }

  handleKeypress = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.hide()
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress)
  }

  handleChoose = (team: string) => () => {
    this.props.onChoose(team)
    this.setState({ visible: false, query: '' })
  }

  onQueryChange = (e: Event) =>
    this.setState({ query: (e.target as HTMLInputElement).value })

  render(
    { render: RenderButton, choices, onChoose }: Props,
    { visible, query }: State
  ) {
    if (!visible) {
      return <RenderButton onClick={this.show} />
    }
    if (this.state.input !== null) {
      this.state.input.focus()
    }
    return (
      <Portal into="body">
        <div class={teamChooser}>
          <button onClick={this.hide}>
            <Icon icon="close" />
          </button>
          <div>
            <input
              autofocus
              value={query}
              onInput={this.onQueryChange}
              ref={(input: HTMLInputElement) => this.setState({ input })}
            />
            <div>
              {choices.filter(c => c.includes(query)).map(c => (
                <button onClick={this.handleChoose(c)} key={c}>
                  {formatTeamNumber(c)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}
