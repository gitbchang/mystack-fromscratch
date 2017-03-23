import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent => <AppContainer>
                                    <AppComponent />
                                </AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}

// document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = "<h1>Hello Webpack!</h1> <p>It's me, Brian!</p><p>One more change to see it update</p>"
