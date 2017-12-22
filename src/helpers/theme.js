import { theme, legacyTheme } from 'pcln-design-system'

const hotelColors = Object.assign({
}, theme.colors, legacyTheme.colors)

const defaultTheme = Object.assign({
}, theme, {
  colors: hotelColors,
  font: `'Helvetica Neue',Helvetica,Arial,sans-serif`
})

const montserratTheme = Object.assign({
}, theme, {
  colors: hotelColors
})

export { defaultTheme, montserratTheme }
