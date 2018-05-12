import linkState from 'linkstate'
import { Component, h } from 'preact'
import { route } from 'preact-router'
import { authenticate, registerUser } from '../../api'
import Button from '../../components/button'
import Header from '../../components/header'
import TextInput from '../../components/text-input'
import style from './style.sss'

interface LoginState {
  username: string
  password: string
  error: string
}

class Login extends Component<{}, LoginState> {
  handleLogin = (e: Event) => {
    e.preventDefault()
    authenticate(this.state)
      .then((jwt: string) => {
        localStorage.setItem('jwt', jwt)
        window.history.back()
      })
      .catch(err =>
        this.setState({
          error:
            Number(err.message) === 401
              ? 'Incorrect username or password.'
              : err.message
        })
      )
  }

  handleRegister = () => {
    registerUser(this.state)
      .then(() => alert('Success! Awaiting admin approval.'))
      .catch((err: Error) => this.setState({ error: err.message }))
  }

  render({}, state: LoginState) {
    return (
      <div class={style.login}>
        <Header title="Login" back="/" />
        <div>
          {state.error ? <p class={style.err}>{state.error}</p> : null}
          <form onSubmit={this.handleLogin}>
            <TextInput
              placeholder="Username"
              onInput={linkState(this, 'username')}
              value={state.username}
            />
            <TextInput
              type="password"
              placeholder="Password"
              onInput={linkState(this, 'password')}
              value={state.password}
            />
            <div class={style.buttons}>
              <Button
                class={style.register}
                type="button"
                onClick={this.handleRegister}
              >
                Register
              </Button>
              <Button>Login</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
