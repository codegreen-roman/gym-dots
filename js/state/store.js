import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducers'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import { translations } from '../i18n/translations'

export const configureStore = (initialState = {}) => {

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

    return store
}
