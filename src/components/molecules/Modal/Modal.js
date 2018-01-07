import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'pcln-design-system'

const propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object
}

const Modal = ({
  onClick,
  theme
}) => {
  /* Using styled-componet with props.theme.colors */
  return (
    <Scrim>
      <div
        data-unit-id='MODAL_CLOSE_LINK'
        onClick={onClick}
      >
        Click to close
      </div>
    </Scrim>
  )

  /* Using dsign-system Box */
  // return (
  //   <Box
  //     color='black'
  //   >
  //     <div
  //       data-unit-id='MODAL_CLOSE_LINK'
  //       onClick={onClick}
  //     >
  //       Click to close
  //     </div>
  //   </Box>
  // )

  /* hacky pass theme to Scrm for testing */
  // return (
  //   <Scrim theme={theme}>
  //     <div
  //       data-unit-id='MODAL_CLOSE_LINK'
  //       onClick={onClick}
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
