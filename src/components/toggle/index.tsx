import { h } from 'preact'
import { toggle } from './style.sss'

const Toggle = ({
  onChange,
  id
}: {
  onChange: JSX.GenericEventHandler
  id: string
}) => (
  <div class={toggle}>
    <input id={id} type="checkbox" onChange={onChange} />
    <label for={id} />
  </div>
)

export default Toggle
