import React from 'react'
import { func, bool, string } from 'prop-types'
import { footerButtonSingle } from './FooterButton.glamor'

export const FooterButton = ({ clickHandler, disabled, children }) => {

    return (
        <button {...footerButtonSingle} disabled={disabled} onClick={clickHandler}>{children}</button>
    )
}

FooterButton.defaultProps = {
    disabled: false,
    clickHandler: () => {}
}

FooterButton.propTypes = {
    clickHandler: func.isRequired,
    disabled: bool,
    children: string.isRequired
}
