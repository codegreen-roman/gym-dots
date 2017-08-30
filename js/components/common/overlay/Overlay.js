import React from 'react'
import { OverlayStyled } from './Overlay.emo'
import { bool, element } from 'prop-types'

export const Overlay = ({ visible, children }) => {
    if (!visible) return null
    return (
        <OverlayStyled visible>
            {children}
        </OverlayStyled>
    )
}

Overlay.propTypes = {
    visible: bool.isRequired,
    children: element.isRequired
}
