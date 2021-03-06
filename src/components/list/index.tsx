import { h } from 'preact'
import style from './style.css'

interface ListProps {
  children?: JSX.Element[]
}

const List = ({ children }: ListProps) => <ul class={style.list}>{children}</ul>

export default List
