import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import pagesField from '../../fragments/pagesField.js'
import enhancePages from '../../../enhancers/enhancePages.js'

const QUERY = gql`
  query fetchMergedPages($sorting: Sorting!, $range: Range) {
  	statistics {
  		id
  		...pagesField
  	}
  }

  ${ pagesField }
`

export default (filters) => {
	const selector = (data) => data?.statistics.pages
	const enhancer = enhancePages

	return useQuery(QUERY, selector, enhancer, {
		variables: filters,
	})
}