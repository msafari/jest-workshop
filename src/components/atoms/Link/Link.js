import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  linkName: PropTypes.string.isRequired
}

const StyledLink = styled.a`
  color: orange;
`

const Link = ({
  linkName
}) => {
  return (
    <StyledLink>
      Click here to open {linkName}
    </StyledLink>
  )
}

Link.propTypes = propTypes

export default Link
