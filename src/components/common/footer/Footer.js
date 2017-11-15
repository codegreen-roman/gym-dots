import React from 'react'
import { FooterWorkoutStart, FooterWorkoutControls } from './FooterControls'
import { T, always, cond } from 'ramda'
import { footerStyles } from './Footer.glamor'
import glamorous from 'glamorous'

/* Conditions */
export const isTrainingInAction = (props) => props.training
export const isTrainingAboutToStart = (props) => !props.training && !props.hidden
export const isFooterHidden = (props) => props.hidden

/* Conditional render */
export const conditionalRender = (props) => cond([
    [isTrainingInAction, always(<FooterWorkoutControls key='control-btns' {...props} />)],
    [isTrainingAboutToStart, always(<FooterWorkoutStart key='start-btn' {...props} />)],
    [isFooterHidden, always(null)],
    [T, always(null)]
])(props)

/* Footer */
export const Footer = (props) =>
    <StyledFooter>
        {conditionalRender(props)}
    </StyledFooter>

/* Footer styling logic */
const StyledFooter = glamorous.footer(
    footerStyles,
    ({children}) => children ? { padding: '15px'} : { padding: 0 }
)
