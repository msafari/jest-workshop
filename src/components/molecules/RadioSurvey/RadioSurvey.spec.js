import React from 'react'
import RadioSurvey from '.'
import { shallow } from 'enzyme'

const handleSubmit = jest.fn()
describe('RadioSurvey', () => {
  test('Clicking on radio button functionality', () => {
    const survey = shallow(
      <RadioSurvey
        handleSubmit={handleSubmit}
      />
    )

    survey.find('Radio').at(1).simulate('change')
    expect(survey.state().answerIndex).toBe(1)
  })

  test('Submit functionality', () => {
    const survey = shallow(
      <RadioSurvey
        handleSubmit={handleSubmit}
      />
    )
    survey.find('Button').simulate('click')
    expect(survey.state().answerIndex).toBe(0)
  })
})
