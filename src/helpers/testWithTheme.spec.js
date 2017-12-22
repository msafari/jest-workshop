import React from 'react'

const testComponent = (
  <div>
    a div
  </div>
)

test('renderWithTheme', () => {
  const mockCreate = jest.fn()
  jest.mock('react-test-renderer', () => ({
    create: mockCreate
  }))
  const renderWithTheme = require('./testWithTheme').renderWithTheme
  renderWithTheme(testComponent)
  expect(mockCreate).toHaveBeenCalled()
})

test('shallowWithTheme', () => {
  const mockShallow = jest.fn()
  jest.mock('enzyme', () => ({
    shallow: mockShallow
  }))
  const shallowWithTheme = require('./testWithTheme').shallowWithTheme
  shallowWithTheme(testComponent)
  expect(mockShallow).toHaveBeenCalled()
})

test('mountWithTheme', () => {
  const mockMount = jest.fn()
  jest.mock('enzyme', () => ({
    mount: mockMount
  }))
  const mountWithTheme = require('./testWithTheme').mountWithTheme
  mountWithTheme(testComponent)
  expect(mockMount).toHaveBeenCalled()
})
