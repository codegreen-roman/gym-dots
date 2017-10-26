import React from 'react'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import { func, bool, object } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'
import { branch, RenderNothing } from '@utils/helpers'


const FooterLayoutHOC = (Component) => {
    const Layout = props => (
        <footer {...footerStyle}>
            <Flex>
                <Component {...props} />
            </Flex>
        </footer>
    )
    return Layout
}


const _FooterButtons = ({ fireStartWorkout, blocked, training, onSetFailed, onSetDone, nextExercise }) => {

    const startButtonHandler = () => fireStartWorkout(nextExercise)

    return branch(
        training,
        (
            <div>
                <FooterButton clickHandler={onSetFailed} data-test='failButton' disabled={false}>Failed</FooterButton>
                <FooterButton clickHandler={onSetDone} data-test='doneButton' disabled={false}>Done</FooterButton>
            </div>
        ),
        <FooterButton disabled={blocked} clickHandler={startButtonHandler}>{blocked ? 'Starting ...' : 'Start Workout'}</FooterButton>
    )
}

_FooterButtons.propTypes = {
    fireStartWorkout: func.isRequired,
    blocked: bool.isRequired,
    training: bool.isRequired,
    onSetFailed: func.isRequired,
    onSetDone: func.isRequired,
    nextExercise: object
}

export const FooterButtons = FooterLayoutHOC(_FooterButtons)


export const Footer = (props, { hidden }) => (
    branch(
        hidden,
        <RenderNothing />,
        <FooterButtons {...props} />
    )
)

Footer.propTypes = {
    hidden: bool.isRequired
}
