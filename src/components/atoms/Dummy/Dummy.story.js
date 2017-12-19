import React from 'react'
import { storiesOf } from '@storybook/react'
import Dummy from '.'

const story = storiesOf('atoms/dummy', module)
  .add('without props', () => {
    return (<Dummy/>)
  })
  .add('with required props', () => {
    return (<Dummy dummyProp={40}/>)
  })

export default story
