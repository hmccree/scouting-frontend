import './style'
import App from './components/app'
import { render, h } from 'preact'

render(<App />, document.body)

const unregiesterSW = async () => {
  if ('serviceWorker' in navigator) {
    ;(await navigator.serviceWorker.getRegistrations()).forEach(sw =>
      sw.unregister().then(console.log)
    )
  }
}

unregiesterSW()
