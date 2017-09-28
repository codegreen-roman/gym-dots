import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './state/store'
import { Main } from './components/main/Main'
import 'normalize.css'
import './utils/reset.css'

const store = configureStore()

render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)
