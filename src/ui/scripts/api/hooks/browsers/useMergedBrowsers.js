import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import browsersField from '../../fragments/browsersField.js'
import enhanceBrowsers from '../../../enhancers/enhanceBrowsers.js'

const QUERY = gql`
  query fetchMergedBrowsers($sorting: Sorting!, $type: BrowserType!, $range: Range) {
  	statistics {
  		id
  		...browsersField
  	}
  }

  ${ browsersField }
`

export default (filters) => {
	const selector = (data) => data?.statistics.browsers
	const enhancer = enhanceBrowsers

	return useQuery(QUERY, selector, enhancer, {
		variables: filters,
	})
}