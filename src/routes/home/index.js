import { h } from 'preact'
import style from './style'
import EventList from '../../components/event-list'

const events = [
  { name: 'Western Canada Regional', key: '2016abca', year: 2016 },
  { name: 'West Michigan Robotics Invitational ', key: '2017wmri', year: 2017 },
  { name: 'WOW Championship', key: '2017wowcmp', year: 2017 }
]

export default () => (
  <div class={style.home}>
    <h1>Pigmice Scouting</h1>
    <EventList events={events} />
  </div>
)
