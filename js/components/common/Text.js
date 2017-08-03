import React from 'react'
import { Translate } from 'react-redux-i18n'
import { string } from 'prop-types'

export const Text = ({ text }) =>
    <Translate value={text} />

Text.propTypes = {
    text: string.isRequired
}
