import React from 'react'
import { FooterActivityControls } from './FooterActivityControls'
import { bool } from 'prop-types'
import { branch, RenderNothing } from '@utils/helpers'


export const Footer = (props, { hidden }) => (
    branch(
        hidden,
        <RenderNothing />,
        <FooterActivityControls {...props} />
    )
)

Footer.propTypes = {
    hidden: bool.isRequired
}
