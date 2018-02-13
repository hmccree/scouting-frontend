import { h, Component } from 'preact'
import {
  header,
  back as backClass,
  navigationDrawerButton,
  navigationDrawer,
  navigationDrawerBackground,
  navigationDrawerContent,
  icon as navigationIcon,
  open as openClass
} from './style.sss'
import Icon from '../icon'

interface NavigationState {}

interface NavigationProps {
  contents?: any
  isOpen: boolean
  toggleMenu: () => void
}

class NavigationDrawer extends Component<NavigationProps, NavigationState> {
  constructor() {
    super()
  }

  render(
    { contents, isOpen, toggleMenu }: NavigationProps,
    {  }: NavigationState
  ) {
    return (
      <div class={`${navigationDrawer} ${isOpen ? openClass : ''}`}>
        <div class={navigationDrawerBackground} onClick={toggleMenu} />
        <div class={navigationDrawerContent} onClick={function() {}}>
          <a href="/leaderboard">
            <li>
              <span class={navigationIcon}>
                <Icon icon="menu" fill="#000" fill-opacity="0.56" />
              </span>
              <span>Leaderboard</span>
            </li>
          </a>
          <a href="/admin">
            <li>
              <span class={navigationIcon}>
                <Icon icon="menu" fill="#000" fill-opacity="0.56" />
              </span>
              <span>Admin</span>
            </li>
          </a>
          <a href="/credits">
            <li>
              <span class={navigationIcon}>
                <Icon icon="menu" fill="#000" fill-opacity="0.56" />
              </span>
              <span>Credits</span>
            </li>
          </a>
          <a>
            <li>
              <span class={navigationIcon}>
                <Icon icon="menu" fill="#000" fill-opacity="0.56" />
              </span>
              <span>NoLink</span>
            </li>
          </a>
        </div>
      </div>
    )
  }
}

interface HeaderState {
  isOpen: boolean
}

interface HeaderProps {
  title?: string
  back?: string
  contents?: any
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor() {
    super()
    this.state = { isOpen: false }
  }

  toggleMenu = () => {
    this.setState(({ isOpen }: HeaderState) => ({ isOpen: !isOpen }))
  }

  render({ title, back, contents }: HeaderProps, { isOpen }: HeaderState) {
    return (
      <header class={header}>
        {back ? (
          <a class={backClass} href={back}>
            <Icon icon="left" />
          </a>
        ) : (
          <span id={navigationDrawerButton} onClick={this.toggleMenu}>
            <Icon icon="menu" />
          </span>
        )}
        <NavigationDrawer isOpen={isOpen} toggleMenu={this.toggleMenu} />
        {contents || <h1>{title}</h1>}
      </header>
    )
  }
}

export default Header
