import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import eventFields from '../../fragments/eventFields.js'

const QUERY = gql`
  query fetchEvents {
  	events {
  		...eventFields
  	}
  }

  ${ eventFields }
`

export default () => {
	const selector = (data) => data?.events
	const enhancer = (events = []) => events

	return useQuery(QUERY, selector, enhancer, {
		fetchPolicy: 'cache-first',
		nextFetchPolicy: 'cache-first',
	})
}