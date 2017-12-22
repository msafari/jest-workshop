import React from 'react'
import render from 'react-test-renderer'
import Dummy from '.'

let dummyObj, dummy

describe('Dummy Component', () => {
  test('renders correctly with no props', () => {
    dummyObj = (<Dummy />)
    dummy = render.create(dummyObj).toJSON()
    expect(console.error).toHaveBeenCalled()
  })

  test('renders correctly with required props', () => {
    dummyObj = (<Dummy dummyProp={40}/>)
    dummy = render.create(dummyObj).toJSON()
    expect(dummy).toMatchSnapshot()
    expect(dummy).toHaveStyleRule('color', 'red')
    expect(dummy).toHaveStyleRule('width', '100%')
  })
})
