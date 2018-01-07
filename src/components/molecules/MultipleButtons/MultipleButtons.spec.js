import React from 'react'
import { mount } from 'enzyme'
import MultipleButtons from '.'

let multipleButtons, multipleButtonsObj
console.log = jest.fn()

describe('Handle Clicking using html tag name', () => {
  test('click on the thrid button', () => {
    multipleButtonsObj = (<MultipleButtons />)
    multipleButtons = mount(multipleButtonsObj)
    multipleButtons.find('button').at(2).simulate('click')
    expect(console.log).toHaveBeenCalledWith('3_button')
  })
})

describe.skip('Handle Clicking using data-unit-id', () => {
  test('click on the thrid button', () => {
    multipleButtonsObj = (<MultipleButtons />)
    multipleButtons = mount(multipleButtonsObj)
    multipleButtons.find('[data-unit-id="NUMBER_3_BUTTON"]').simulate('click')
    expect(console.log).toHaveBeenCalledWith('3_button')
  })
})
