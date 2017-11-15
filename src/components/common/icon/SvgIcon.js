import React from 'react'
import { string, node, bool } from 'prop-types'
import { curry, prop } from 'ramda'
import { StyledSvg } from './SvgIcon.glamor'
import { icons24, icons36 } from '../../../utils/icons'

/* Wrapper to create different svg icon components */
const SvgWrap = curry((path, props) => (
    <SvgIcon {...props}>
        <path d={path} />
    </SvgIcon>
))

const propOfIcons24 = key => prop(key, icons24)
const propOfIcons36 = key => prop(key, icons36)

/* 24 24 viewbox icons */
const MenuIcon = SvgWrap(propOfIcons24('menu'))
const FacebookIcon = SvgWrap(propOfIcons24('facebook'))
const TwitterIcon = SvgWrap(propOfIcons24('twitter'))
const GuestIcon = SvgWrap(propOfIcons24('guest'))

/* 36 36 viewbox icons */
const DumbbellsIcon = SvgWrap(propOfIcons36('dumbbells'))
const CheckIcon = SvgWrap(propOfIcons36('check'))

/* Base svg component */
const SvgIcon = ({ big, viewBox, children, ...other }) => (
    <StyledSvg {...other} big={big} viewBox={big ? '0 0 36 36' : viewBox}>
        {children}
    </StyledSvg>
)

SvgIcon.propTypes = {
    viewBox: string,
    big: bool,
    children: node
}

SvgIcon.defaultProps = {
    viewBox: '0 0 24 24',
    big: false
}

MenuIcon.displayName = 'MenuIcon'
FacebookIcon.displayName = 'FacebookIcon'
TwitterIcon.displayName = 'TwitterIcon'
GuestIcon.displayName = 'GuestIcon'
DumbbellsIcon.displayName = 'DumbbellsIcon'
CheckIcon.displayName = 'CheckIcon'

export {
    MenuIcon,
    FacebookIcon,
    TwitterIcon,
    GuestIcon,
    DumbbellsIcon,
    CheckIcon,
    SvgIcon,
    SvgWrap,
    propOfIcons24,
    propOfIcons36
}
