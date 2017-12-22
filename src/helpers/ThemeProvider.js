import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

const propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
}

const DetailContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.font};
  line-height: 1.4;
  * {
    box-sizing: border-box;
  }
`

const HotelThemeProvider = ({
  children,
  theme
}) => (
  <ThemeProvider theme={theme}>
    <DetailContainer>
      {children}
    </DetailContainer>
  </ThemeProvider>
)

HotelThemeProvider.propTypes = propTypes

export default HotelThemeProvider
