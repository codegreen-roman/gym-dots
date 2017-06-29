import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import { translations } from '../i18n/translations'
import { loadSessions } from './actions'

const INITIAL_STATE = {}

export const configureStore = (initialState = INITIAL_STATE) => {

    const enchancers = [
        applyMiddleware(thunk),
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
