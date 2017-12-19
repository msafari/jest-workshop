import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'pcln-design-system'
import styled from 'styled-components'
import '@storybook/addon-knobs/register'
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Deal Assistant',
  url: 'https://bitbucket.corp.priceline.com/projects/HTL/repos/deal-assistant/'
})

const DealAssistantContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

addDecorator(withSmartKnobs)
addDecorator(withKnobs)
addDecorator((story) => (
  <ThemeProvider>
    <DealAssistantContainer>
      {story()}
    </DealAssistantContainer>
  </ThemeProvider>
))

function loadStories() {
  require('glob-loader!./stories.pattern')
}

configure(loadStories, module)
