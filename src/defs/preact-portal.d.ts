declare module 'preact-portal' {
  import { Component } from 'preact'
  interface State {}
  interface Props {
    into: string
  }
  export default class Portal extends Component<Props, State> {}
}
