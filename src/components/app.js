import { h } from 'preact'
import { Router } from 'preact-router'

import Home from '../routes/home'
import Event from '../routes/event'

export default () => (
  <div>
    <Router>
      <Home path="/" />
      <Event path="/events/:eventId" />
    </Router>
  </div>
)
