import { h } from 'preact'
import { Router } from 'preact-router'

import Home from '../routes/home'
import Event from '../routes/event'
import Error404 from '../routes/404'

export default () => (
  <div>
    <Router>
      <Home path="/" />
      <Event path="/events/:eventId" />
      <Error404 default />
    </Router>
  </div>
)
