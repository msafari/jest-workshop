import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Box } from 'pcln-design-system'

const propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object
}

const Modal = ({
  onClick
}) => {
  return (
    <Scrim>
      <div
        data-unit-id='MODAL_CLOSE_LINK'
        onClick={this.props.onClick}
      >
        Click to close
      </div>
    </Scrim>
  )

//   return (
//     <Box
//       color='black'
//     >
//       <div
//         data-unit-id='MODAL_CLOSE_LINK'
//         onClick={this.handleClick}
//       >
//         Click to close
//       </div>
//     </Box>
//   )

  // return (
  //   <Scrim theme={this.props.theme}>
  //     <div
  //       data-unit-id='MODAL_CLOSE_LINK'
  //       onClick={this.handleClick}
  //     >
  //       Click to close
  //     </div>
  //   </Scrim>
  // )
}

const Scrim = styled.div`
  color: ${props => props.theme.colors.black};
`

Modal.propTypes = propTypes

export default Modal
