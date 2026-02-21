import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import factsFields from '../../fragments/factsFields.js'
import enhanceFacts from '../../../enhancers/enhanceFacts.js'

const QUERY = gql`
  query fetchMergedFacts {
  	facts {
  		...factsFields
  	}
  }

  ${ factsFields }
`

export default () => {
	const selector = (data) => data?.facts
	const enhancer = enhanceFacts

	return useQuery(QUERY, selector, enhancer)
}