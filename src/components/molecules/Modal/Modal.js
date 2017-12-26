import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'pcln-design-system'

const propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object
}

class Modal extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.props.onClick()
    this.setState({
      clicked: true
    })
  }

  render () {
    return (
      <Scrim>
        <div
          data-unit-id='MODAL_CLOSE_LINK'
          onClick={this.handleClick}
        >
          Click to close
        </div>
      </Scrim>
    )
  }

  // render () {
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
  // }

  // render () {
  //   return (
  //     <Scrim theme={this.props.theme}>
  //       <div
  //         data-unit-id='MODAL_CLOSE_LINK'
  //         onClick={this.handleClick}
  //       >
  //         Click to close
  //       </div>
  //     </Scrim>
  //   )
  // }
}

const Scrim = styled.div`
  color: ${props => props.theme.colors.black};
`

Modal.propTypes = propTypes

export default Modal
