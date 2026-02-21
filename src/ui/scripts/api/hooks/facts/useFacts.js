import { gql } from '@apollo/client'

import useQuery from '../../utils/useQuery.js'
import factsFields from '../../fragments/factsFields.js'
import enhanceFacts from '../../../enhancers/enhanceFacts.js'

const QUERY = gql`
  query fetchFacts($id: ID!) {
  	domain(id: $id) {
  		id
  		facts {
  			...factsFields
  		}
  	}
  }

  ${ factsFields }
`

export default (id) => {
	const selector = (data) => data?.domain.facts
	const enhancer = enhanceFacts

	return useQuery(QUERY, selector, enhancer, {
		variables: {
			id,
		},
	})
}