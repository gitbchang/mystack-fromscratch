import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))

// document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = "<h1>Hello Webpack!</h1> <p>It's me, Brian!</p><p>One more change to see it update</p>"
