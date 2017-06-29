import React from 'react'
import { func, object } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import { connect } from 'react-redux'
import R from 'ramda'

const option = item => (
    <option key={item} value={item}>{item}</option>
)

const renderOptions = R.compose(R.map(option), R.keys)
const extractValue = R.compose(R.prop('value'), R.prop('target'))

const _ToggleMenu = ({ changeLanguage, translations }) => {

    const handleChange = R.compose(changeLanguage, extractValue)

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
