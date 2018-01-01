import { h } from 'preact'
import Analysis from '../../models/analysis'

const Table = ({ data }: { data: Analysis[] }) => (
  <table>
    <th />
    {data.map(analysis => <th>{analysis.team}</th>)}
    {Object.keys(data[0].stats).map(stat => (
      <TableRow data={data} stat={stat} />
    ))}
  </table>
)

const TableRow = ({ data, stat }: { data: Analysis[]; stat: string }) => (
  <tr>
    <td>{stat}</td>
    {data.map(analysis => <td>{analysis.stats[stat]}</td>)}
  </tr>
)

export default Table
