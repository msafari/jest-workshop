import React from 'react'
import render from 'react-test-renderer'
import Dummy from '.'
import ShallowRenderer from 'react-test-renderer/shallow'

let dummyObj, dummy

describe('Dummy Component', () => {
  test('renders correctly with no props', () => {
    dummyObj = (<Dummy />)
    dummy = render.create(dummyObj).toJSON()
    expect(console.error).toHaveBeenCalled()
  })

  test('ShallowRenderer', () => {
    const renderer = new ShallowRenderer()
    dummyObj = renderer.render(<Dummy dummyProp={40}/>)
    const dummyResult = renderer.getRenderOutput()
    // for-demo:
    // console.log(dummyResult.props.children)
    expect(dummyResult.props.children[0]).toBe('My fake dummy prop is ')
    expect(dummyResult.props.children[1]).toBe(40)
  })

  test('renders correctly with required props', () => {
    dummyObj = (<Dummy dummyProp={40}/>)
    dummy = render.create(dummyObj).toJSON()
    expect(dummy).toMatchSnapshot()
    expect(dummy).toHaveStyleRule('color', 'red')
    expect(dummy).toHaveStyleRule('width', '100%')
  })
})
