import React from 'react'
import render from 'react-test-renderer'
import { renderWithTheme } from 'helpers/testWithTheme'
import Price from '.'

test('Price Rendering with Theme', () => {
  const price = renderWithTheme(
    <Price price={100} />
  )
  expect(price).toMatchSnapshot()
})

test.skip('Price Rendering without Theme, use design-system Text', () => {
  const price = render.create(
    <Price price={100} />
  ).toJSON()
  expect(price).toMatchSnapshot()
})
