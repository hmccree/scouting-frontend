import { h } from 'preact'
import { button } from './style.sss'

interface ButtonProps {
  children?: JSX.Element[]
  href?: string
  type?: 'submit' | null
  value?: string
  onClick?: () => any
}

const Button = ({ children, href, type, value, onClick }: ButtonProps) =>
  onClick ? (
    <button class={button} onClick={onClick}>
      {children}
    </button>
  ) : type === 'submit' ? (
    <input class={button} type="submit" value={value} />
  ) : (
    <a class={button} href={href}>
      {children}
    </a>
  )

export default Button
