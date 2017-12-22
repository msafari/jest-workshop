import React from 'react'
import { shallow, mount } from 'enzyme'
import render from 'react-test-renderer'
import { defaultTheme } from './theme'
import ThemeProvider from './ThemeProvider'

export function renderWithTheme (children) {
  return render.create(
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}

export function shallowWithTheme (children) {
  return shallow(
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}

export function mountWithTheme (children) {
  return mount(
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}
