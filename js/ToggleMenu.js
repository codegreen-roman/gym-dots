import React from 'react'
import { func, object } from 'prop-types'
import { setLocale } from 'react-redux-i18n'
import { connect } from 'react-redux'

const _ToggleMenu = props => {
    return (
        <select onChange={(e) => props.changeLanguage(e.target.value)}>
            {Object.keys(props.translations).map(itm => 
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

export default connect(mapStateToProps , mapActionsToProps)(_ToggleMenu)