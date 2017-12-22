import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  dataUnitId: PropTypes.string
}

/* Without data-unit-id */

const Button = ({
  buttonText,
  onClick
}) => {
  return (
    <StyledButton onClick={onClick}>
      {buttonText}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: #333;
`

Button.propTypes = propTypes
export default Button

/* With data-unit-id */

// const Button = ({
//   buttonText,
//   onClick,
//   dataUnitId
// }) => {
//   return (
//     <StyledButton
//       data-unit-id={dataUnitId}
//       onClick={onClick}
//     >
//       {buttonText}
//     </StyledButton>
//   )
// }
//
// const StyledButton = styled.button`
//   background-color: #333;
// `
// Button.propTypes = propTypes
// export default Button
