import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

const story = storiesOf('atoms/Link', module)
  .add('without props', () => {
    return (<Link/>)
  })
  .add('with required props', () => {
    return (<Link linkName='Priceline'/>)
  })

export default story
