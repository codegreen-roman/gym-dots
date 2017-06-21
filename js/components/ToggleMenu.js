import React from 'react'
import { func, object } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import { connect } from 'react-redux'

const _ToggleMenu = ({ changeLanguage, translations }) => {
    return (
        <select onChange={(e) => changeLanguage(e.target.value)}>
            {Object.keys(translations).map(itm =>
                <option key={itm} value={itm}>{itm}</option>
            )}
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

export default connect(mapStateToProps, mapActionsToProps)(_ToggleMenu)
