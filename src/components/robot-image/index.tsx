import { h } from 'preact'
import { robotImage, blue, red } from './style.sss'

interface RobotImageProps {
  team: string
  color: string
  key: string
}

const RobotImage = ({ team, color = 'blue' }: RobotImageProps) => (
  <div class={`${robotImage} ${color === 'blue' ? blue : red}`}>
    <span>{team}</span>
  </div>
)

export default RobotImage
