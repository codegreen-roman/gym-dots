import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer } from './reducer'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import { translations } from '../i18n/translations'
import { loadSessions } from './actions'
import { INITIAL_STATE } from './initialState'

const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
})

export const configureStore = (initialState = INITIAL_STATE) => {

    const enchancers = [
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ]

    const store = createStore(
        reducer,
        initialState,
        compose(...enchancers)
    )

    syncTranslationWithStore(store)

    store.dispatch(loadTranslations(translations))
    store.dispatch(setLocale('en'))
    store.dispatch(loadSessions())

    return store
}
