import { h } from 'preact'
import style from './style'

const Select = ({ options, onChange }) => (
  <select class={style.select} onChange={onChange}>
    {options}
  </select>
)

export default Select
