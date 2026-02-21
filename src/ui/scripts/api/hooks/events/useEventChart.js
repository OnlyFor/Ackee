import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import chartField from '../../fragments/chartField.js'
import enhanceEventChart from '../../../enhancers/enhanceEventChart.js'

const QUERY = gql`
  query fetchEventChartEntries($id: ID!, $interval: Interval!, $type: EventChartType!, $limit: Int) {
  	event(id: $id) {
  		id
  		statistics {
  			id
  			...chartField
  		}
  	}
  }

  ${ chartField }
`

export default (id, filters) => {
	const selector = (data) => data?.event.statistics.chart
	const enhancer = (value) => enhanceEventChart(value, filters.limit)

	return useQuery(QUERY, selector, enhancer, {
		variables: {
			...filters,
			id,
		},
	})
}