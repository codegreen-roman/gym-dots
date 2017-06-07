import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducers'

export const configureStore = (initialState = {}) => {

    const enchancers = [
        applyMiddleware(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ]

    const store = createStore(
        reducer,
        initialState,
        compose(...enchancers)
    )
    return store
}
