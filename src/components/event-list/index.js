import { h, Component } from 'preact'
import TextInput from '../../components/text-input'
import List from '../../components/list'
import style from './style'

class EventList extends Component {
  queryChanged = e => {
    this.setState({ query: e.target.value })
  }

  constructor() {
    super()
    this.state = { query: '' }
  }

  render({ events }, { query }) {
    const year = new Date().getFullYear()
    return (
      <div class={style['event-list']}>
        <TextInput
          onInput={this.queryChanged}
          placeholder="Find an event"
          type="search"
        />
        <List>
          {events
            .filter(e => e.year === year)
            .filter(e => e.name.toLowerCase().includes(query.toLowerCase()))
            .map(e => <li key={e.key}>{e.name}</li>)}
        </List>
      </div>
    )
  }
}

export default EventList
