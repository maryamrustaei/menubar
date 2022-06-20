import React from 'react'

export const themes = {
  dark: {
    color: 'white',
    backgroundColor: '#222',
    fill: 'white',
  },
  light: {
    color: 'blue',
    backgroundColor: '#eee',
    fill: 'blue',
  }
}

const ThemeComponent = React.createContext()

export default ThemeComponent
