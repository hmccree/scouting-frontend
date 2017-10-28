import { h } from 'preact'
import { Router } from 'preact-router'

import Home from '../routes/home'

export default () => (
  <div id="app">
    <Router>
      <Home path="/" />
    </Router>
  </div>
)
