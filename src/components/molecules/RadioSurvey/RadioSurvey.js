import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  Box,
  Button,
  Radio,
  Label
} from 'pcln-design-system'

const propTypes = {
  handleSubmit: PropTypes.func
}

class RadioSurvey extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerIndex: 0,
      surveyQuestions: [
        {
          text: 'how to use jest',
          isChecked: true
        }, {
          text: 'when to use snapshots',
          isChecked: false
        }, {
          text: 'coverage reports',
          isChecked: false
        }, {
          text: 'testing with design-system',
          isChecked: false
        }, {
          text: 'an',
          isChecked: false
        }, {
          text: 'I didn\'t learn anything',
          isChecked: false
        }
      ]
    }
    this._handleSubmit = this.handleSubmit.bind(this)
    this._handleRadioClick = this.handleRadioClick.bind(this)
    this._renderOptions = this.renderOptions.bind(this)
  }

  handleSubmit () {
    const {
      answerIndex
    } = this.state
    this.props.handleSubmit(answerIndex)
  }

  handleRadioClick (question, selectedIndex) {
    this.setState((prevState) => {
      const updatedQuestions = prevState.surveyQuestions
      updatedQuestions[prevState.answerIndex].isChecked = false
      updatedQuestions[selectedIndex].isChecked = true
      return {
        surveyQuestions: updatedQuestions
      }
    })

    this.setState({
      answerIndex: selectedIndex
    })
  }

  renderOptions () {
    return this.state.surveyQuestions.map((q, index) => {
      const key = `da-survey-${index}`
      return (
        <Label
          key={key}
          fontSize={0}
          py={2}>
          <Radio
            checked={q.isChecked}
            disabled={q.isDisabled}
            onChange={() => this._handleRadioClick(q, index)}
          />
          <Text.span
            pl={2}
            align='left'
            regular
            color='text'>
            {q.text}
          </Text.span>
        </Label>
      )
    })
  }

  render () {
    const {
      surveyQuestions
    } = this.state

    return (
      <Box width={424} p={3} pt={4}>
        <Text bold fontSize={2}>
          Howdy! Please help us improve by answering a quick question
        </Text>
        <Text pt={1} pb={2} fontSize={1} color='black'>
          what was the main thing you learned from this course?
        </Text>
        {this._renderOptions(surveyQuestions)}
        <Button mt={3} onClick={this._handleSubmit}>
          Submit
        </Button>
      </Box>
    )
  }
}

RadioSurvey.propTypes = propTypes

export default RadioSurvey
