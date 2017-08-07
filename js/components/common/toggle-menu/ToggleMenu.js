import React from 'react'
import { func, object } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import { connect } from 'react-redux'
import { map, compose, prop, keys } from 'ramda'

const option = item => (
    <option key={item} value={item}>{item}</option>
)

const renderOptions = compose(map(option), keys)
const extractValue = compose(prop('value'), prop('target'))

export const _ToggleMenu = ({ changeLanguage, translations }) => {

    const handleChange = compose(changeLanguage, extractValue)

    return (
        <select onChange={handleChange}>
            {renderOptions(translations)}
        </select>
    )
}

_ToggleMenu.propTypes = {
    changeLanguage: func,
    translations: object
}

const mapStateToProps = (state) => ({
    translations: state.i18n.translations
})

const mapActionsToProps = dispatch => ({
    changeLanguage(locale) {
        dispatch(setLocale(locale))
    }
})

export const ToggleMenu = connect(mapStateToProps, mapActionsToProps)(_ToggleMenu)
