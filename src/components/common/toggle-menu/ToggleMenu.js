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
    changeLanguage: func.isRequired,
    translations: object.isRequired
}

const mapStateToProps = ({ i18n: { translations } }) => ({
    translations
})

const mapActionsToProps = dispatch => ({
    changeLanguage: compose(dispatch, setLocale)
})

export const ToggleMenu = connect(mapStateToProps, mapActionsToProps)(_ToggleMenu)
