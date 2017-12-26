import React from 'react'
import { mountWithTheme } from 'helpers/testWithTheme'
import { mount, shallow } from 'enzyme'
import { theme } from 'pcln-design-system'
import Container from '.'

test('Container with theme', () => {
  const container = mountWithTheme(
    <Container />
  )
  container.find('[data-unit-id="MODAL_CLOSE_LINK"]').simulate('click')
  // this will fail
  expect(container.state().modalClicked).toBeTruthy()
})

test('Container without theme, mount', () => {
  // this fails too, no theme.colors.black
  const container = mount(
    <Container />
  )
  container.find('[data-unit-id="MODAL_CLOSE_LINK"]').simulate('click')
  expect(container.state().modalClicked).toBeTruthy()
})

test('Container without theme, shallow', () => {
  const container = shallow(
    <Container />
  )

  // this fails too, can't find children component
  container.find('[data-unit-id="MODAL_CLOSE_LINK"]').simulate('click')
  expect(container.state().modalClicked).toBeTruthy()
})

test('Container without theme, shallow test with instance', () => {
  const container = shallow(
    <Container />
  )
  const inst = container.instance()
  // test the function directly, no simulate click, works!
  inst.handleClick()
  expect(container.state().modalClicked).toBeTruthy()
})

test.skip('Using design-system Box', () => {
  const container = mount(
    <Container />
  )
  // this works!
  container.find('[data-unit-id="MODAL_CLOSE_LINK"]').simulate('click')
  expect(container.state().modalClicked).toBeTruthy()
})

test.skip('Container hacky with theme', () => {
  const container = mount(
    <Container theme={theme}/>
  )
  container.find('[data-unit-id="MODAL_CLOSE_LINK"]').simulate('click')
  expect(container.state().modalClicked).toBeTruthy()
})
