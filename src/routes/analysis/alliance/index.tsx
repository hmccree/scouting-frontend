import { h } from 'preact'
import Header from '../../../components/header'
import Spinner from '../../../components/spinner'
import Table from '../../../components/table'
import Resolver from '../../../resolver'
import Analysis from '../../../models/analysis'
import { getAllianceAnalysis } from '../../../api'
import { camelToTitle } from '../../../utils'

const AllianceAnalysis = ({
  eventId,
  matchId,
  color
}: {
  eventId: string
  matchId: string
  color: string
}) => (
  <Resolver
    data={{ data: getAllianceAnalysis(eventId, matchId, color) }}
    render={({ data }) => (
      <div>
        <Header
          title={`${matchId.toUpperCase()} - ${camelToTitle(color)} Alliance`}
          back={`/events/${eventId}/${matchId}`}
        />
        {data ? (
          data.length === 0 ? (
            <p>No reports have been submitted for this alliance yet.</p>
          ) : (
            <Table data={data} />
          )
        ) : (
          <Spinner />
        )}
      </div>
    )}
  />
)

export default AllianceAnalysis
