import React from 'react'
import { FooterButton } from './buttons/FooterButton'
import { func, bool } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'
import { footerStyle } from './Footer.glamor'
import { branch } from '@utils/helpers'
import { compose, withHandlers } from 'recompose'


/**
 * Responsible for setting exercise to either "failed" or "done" status
 */
const FooterWorkoutControls = ({ onSetFailed, onSetDone }) => (
    <div>
        <FooterButton clickHandler={onSetFailed} data-test='failButton' disabled={false}>Failed</FooterButton>
        <FooterButton clickHandler={onSetDone} data-test='doneButton' disabled={false}>Done</FooterButton>
    </div>
)

FooterWorkoutControls.propTypes = {
    onSetFailed: func.isRequired,
    onSetDone: func.isRequired
}

/**
 * Responsible for starting a workout
 */
const _FooterWorkoutStart = ({ blocked, startButtonHandler }) => {
    return (
        <div>
            <FooterButton disabled={blocked} clickHandler={startButtonHandler}>
                {blocked ? 'Starting ...' : 'Start Workout'}
            </FooterButton>
        </div>
    )
}

_FooterWorkoutStart.propTypes = {
    blocked: bool.isRequired,
    startButtonHandler: func.isRequired
}

export const FooterWorkoutStart = compose(
    withHandlers({
        startButtonHandler: ({fireStartWorkout, nextExercise}) => () => fireStartWorkout(nextExercise)
    })
)(_FooterWorkoutStart)


/**
 * Responsible for wrapping footer controls
 */
const _FooterControlsHolder = (props) => {
    return branch(props.training,
        <FooterWorkoutControls {...props} />,
        <FooterWorkoutStart {...props} />
    )
}

/**
 * Layout HOC
 */
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

export const FooterControlsHolder = FooterLayoutHOC(_FooterControlsHolder)
