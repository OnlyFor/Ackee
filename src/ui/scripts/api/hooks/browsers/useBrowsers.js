import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import browsersField from '../../fragments/browsersField.js'
import enhanceBrowsers from '../../../enhancers/enhanceBrowsers.js'

const QUERY = gql`
  query fetchBrowsers($id: ID!, $sorting: Sorting!, $type: BrowserType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...browsersField
  		}
  	}
  }

  ${ browsersField }
`

export default (id, filters) => {
	const selector = (data) => data?.domain.statistics.browsers
	const enhancer = enhanceBrowsers

	return useQuery(QUERY, selector, enhancer, {
		variables: {
			...filters,
			id,
		},
	})
}