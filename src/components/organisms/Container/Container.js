import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'molecules/Modal'

const propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
}

class Container extends Component {
  state = {
    modalClicked: false
  }

  handleClick = () => {
    this.setState({
      modalClicked: true
    })
  }

  render () {
    return (
      <div>
        <Modal
          onClick={this.handleClick}
        />
      </div>
    )
  }

  // render () {
  //   return (
  //     <div>
  //       <Modal
  //         theme={this.props.theme}
  //         onClick={this.handleClick}
  //       />
  //     </div>
  //   )
  // }
}

Container.propTypes = propTypes

export default Container
