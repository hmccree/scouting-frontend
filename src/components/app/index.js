import { h } from 'preact'
import { Router } from 'preact-router'
import style from './style'

import Home from '../../routes/home'
import Event from '../../routes/event'
import Error404 from '../../routes/404'

export default () => (
  <div id={style.app}>
    <Router>
      <Home path="/" />
      <Event path="/events/:eventId" />
      <Error404 default />
    </Router>
  </div>
)