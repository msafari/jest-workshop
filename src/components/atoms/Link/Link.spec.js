import React from 'react'
import renderer from 'react-test-renderer'
import Link from '.'

test('Link component renders correctly', () => {
  const link = renderer.create(
    <Link linkName='Priceline'/>
  ).toJSON()
  expect(link).toMatchSnapshot()
})
