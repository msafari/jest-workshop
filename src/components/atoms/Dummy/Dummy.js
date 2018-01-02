import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'atoms/Button'
import 'jest-styled-components'

const propTypes = {
  dummyProp: PropTypes.number.isRequired,
  className: PropTypes.string
}

const StyledDummy = styled.div`
  color: red;
  width: 100%;
`

const Dummy = ({
  className,
  dummyProp
}) => {
  return (
    <StyledDummy
      className={className}
    >
      My fake dummy prop is {dummyProp}
      <Button
        buttonText='Hey! Click on me please!'
        onClick={() => console.log('Thank you for clicking on me!')}
      />
    </StyledDummy>
  )
}

Dummy.propTypes = propTypes

export default Dummy
