import React from 'react'
import { func, node } from 'prop-types'
import glamorous from 'glamorous'
import { loginButtonStyles, linkButtonStyles, footerButtonStyles } from './Button.glamor'

const Button = ({ onClickAction, children, ...other }) => (
    <button {...other} onClick={onClickAction}>
        {children}
    </button>
)

Button.propTypes = {
    onClickAction: func.isRequired,
    children: node
}

const LinkButton = glamorous(Button)(linkButtonStyles)
const LoginButton = glamorous(Button)(loginButtonStyles)
const FooterButton = glamorous(Button)(footerButtonStyles)

export {
    Button,
    LoginButton,
    LinkButton,
    FooterButton
}
