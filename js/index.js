import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { subscribeToAuthStateChanged } from './state/actions'
import { configureStore } from './state/store'

import { Main } from './components/main/Main'

const store = configureStore()
subscribeToAuthStateChanged(store.dispatch)

render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)
