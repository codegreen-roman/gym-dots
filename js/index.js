import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './state/store'
import { fetchExercises } from './state/actions/firebase/databaseActions'

import { Main } from './components/main/Main'

const store = configureStore()
store.dispatch(fetchExercises())

render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app')
)
