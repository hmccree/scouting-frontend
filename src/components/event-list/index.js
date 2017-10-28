import { h, Component } from 'preact'
import TextInput from '../../components/text-input'
import Select from '../../components/select'
import List from '../../components/list'
import style from './style'

class EventList extends Component {
  yearSelected = e => {
    this.setState({ year: Number(e.target.value) })
  }

  queryChanged = e => {
    this.setState({ query: e.target.value })
  }

  constructor() {
    super()
    this.state = { query: '', year: new Date().getFullYear() }
  }

  render({ events }, { year, query }) {
    return (
      <div class={style['event-list']}>
        <div class={style.filter}>
          <TextInput
            onInput={this.queryChanged}
            placeholder="Find an event"
            type="search"
          />
          <Select
            onChange={this.yearSelected}
            options={Array.from(
              events.reduce((acc, e) => acc.add(e.year), new Set())
            ).map(yearOption => (
              <option key={yearOption} selected={yearOption === year}>
                {yearOption}
              </option>
            ))}
          />
        </div>
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
