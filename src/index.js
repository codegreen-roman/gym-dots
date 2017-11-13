require('babel-core/register')
require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { configureStore } from './state/store'
import { Main } from './components/main/Main'
import { css } from 'glamor'
import './utils/bootstrap-reboot.css'

/* Global styles */
css.global('html, body', { height: '100%' })
css.global('#app', { height: '100%', fontFamily: 'Nunito' })

const { store, history } = configureStore()

render(
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)
