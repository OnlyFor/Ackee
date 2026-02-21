import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import durationsField from '../../fragments/durationsField.js'
import enhanceDurations from '../../../enhancers/enhanceDurations.js'

const QUERY = gql`
  query fetchMergedDurations($interval: Interval!, $limit: Int) {
  	statistics {
  		id
  		...durationsField
  	}
  }

  ${ durationsField }
`

export default (filters) => {
	const selector = (data) => data?.statistics.durations
	const enhancer = (value) => enhanceDurations(value, filters.limit)

	return useQuery(QUERY, selector, enhancer, {
		variables: filters,
	})
}