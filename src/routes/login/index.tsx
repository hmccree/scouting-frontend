import { h, Component } from 'preact'
import { authenticate } from '../../api'
import linkState from 'linkstate'
import { route } from 'preact-router'
import Header from '../../components/header'

interface LoginProps {
  back: string
}

interface LoginState {
  username: string
  password: string
  error: string
}

class Login extends Component<LoginProps, LoginState> {
  handleUsernameChange = (e: Event) => {
    this.setState({ username: (e.target as HTMLInputElement).value })
  }

  handlePasswordChange = (e: Event) => {
    this.setState({ password: (e.target as HTMLInputElement).value })
  }

  handleLogin = (e: Event, back: string) => {
    e.preventDefault()
    authenticate(this.state)
      .then((jwt: string) => {
        localStorage.setItem('jwt', jwt)
        route(back || '/')
      })
      .catch(err => this.setState({ error: err.toString() }))
  }

  render({ back }: LoginProps, state: LoginState) {
    return (
      <div>
        <Header title="Login" back={back} />
        {state.error ? <p>{state.error}</p> : null}
        <form onSubmit={e => this.handleLogin(e, back)}>
          <input
            type="text"
            onChange={linkState(this, 'username')}
            value={state.username}
          />
          <input
            type="password"
            onChange={linkState(this, 'password')}
            value={state.password}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
