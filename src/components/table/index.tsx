import { h } from 'preact'
import Analysis from '../../models/analysis'
import Schema from '../../models/schema'
import {
  camelToTitle,
  toPercentage,
  toPrettyNumber,
  formatTeamNumber
} from '../../utils'
import { table, statColumn } from './style.sss'

const Table = ({ data, schema }: { data: Analysis[]; schema: Schema }) => (
  <div class={table}>
    <table>
      <tr>
        <th />
        {data.map(analysis => <th>{formatTeamNumber(analysis.team)}</th>)}
      </tr>
      {Object.keys(data[0].stats).map(stat => (
        <TableRow data={data} stat={stat} schema={schema} />
      ))}
    </table>
  </div>
)

const TableRow = ({
  data,
  stat,
  schema
}: {
  data: Analysis[]
  stat: string
  schema: Schema
}) => (
  <tr>
    <td class={statColumn}>{camelToTitle(stat)}</td>
    {data.map(analysis => {
      const s = analysis.stats[stat]
      return (
        <td>
          {schema[stat] === 'number' ? toPrettyNumber(s) : toPercentage(s)}
        </td>
      )
    })}
  </tr>
)

export default Table
