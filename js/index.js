import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import { configureStore } from './state/store'
import { Main } from './components/main/Main'
import 'normalize.css'
import './utils/reset.css'

const { store, history } = configureStore()

render(
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)
