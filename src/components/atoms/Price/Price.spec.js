import React from 'react'
import { renderWithTheme } from 'helpers/testWithTheme'
import Price from '.'

test('Price Rendering', () => {
  const price = renderWithTheme(
    <Price price={100} />
  )
  expect(price).toMatchSnapshot()
})
