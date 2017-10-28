import { h } from 'preact'
import style from './style'

const List = ({ children }) => <ul class={style.list}>{children}</ul>

export default List
