import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'
import { ConfigPage } from 'components'

import theme from './themes/default'
import './main.scss'

const GlobalStyle = createGlobalStyle`
  *:not(div){
    user-select: none;
  }
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
  p {
    margin: 0;
    color: white;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/config" component={ConfigPage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
