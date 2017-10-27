import React from 'react'
import { FooterControlsHolder } from './FooterControlsHolder'
import { branch, RenderNothing } from '@utils/helpers'

export const Footer = (props) => (
    branch(
        props.hidden,
        <RenderNothing />,
        <FooterControlsHolder {...props} />
    )
)
