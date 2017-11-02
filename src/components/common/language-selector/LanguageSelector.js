import React from 'react'
import { func, object } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import { connect } from 'react-redux'
import { map, compose, keys } from 'ramda'
import { withHandlers } from 'recompose'
import { extractTargetValue } from '@utils/helpers'

const option = item => (
    <option key={item} value={item}>{item}</option>
)

const renderOptions = compose(map(option), keys)

export const _LanguageSelector = ({ translations, handleChange }) => (
    <select onChange={handleChange}>
        {renderOptions(translations)}
    </select>
)

_LanguageSelector.propTypes = {
    handleChange: func.isRequired,
    translations: object.isRequired
}

const mapStateToProps = ({ i18n: { translations } }) => ({ translations })

const mapActionsToProps = dispatch => ({
    changeLanguage: compose(dispatch, setLocale)
})

export const LanguageSelector = compose(
    connect(mapStateToProps, mapActionsToProps),
    withHandlers({
        handleChange: ({ changeLanguage }) => compose(changeLanguage, extractTargetValue)
    })
)(_LanguageSelector)
