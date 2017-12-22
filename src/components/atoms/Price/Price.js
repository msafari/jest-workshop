import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Text } from 'pcln-design-system'

const propTypes = {
  price: PropTypes.number.isRequired
}

const Price = ({
  price
}) => {
  return (
    <PriceAmount>
      {price}
    </PriceAmount>
  )
}

const PriceAmount = styled.span`
  display: inline-block;
  font-size: 12px;
  color: ${props => props.theme.green};
`

// const Price = ({
//   price
// }) => {
//   return (
//     <Text.span
//       color='green'
//       fontSize={0}
//     >
//       {price}
//     </Text.span>
//   )
// }

Price.propTypes = propTypes

export default Price
