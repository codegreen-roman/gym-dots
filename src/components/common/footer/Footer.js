import React from 'react'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import { func, bool, object, array } from 'prop-types'
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


export class Footer extends React.Component {
    static propTypes = {
        shouldEndExercise: bool.isRequired,
        fireCompleteExercise: func.isRequired,
        nextExercise: object,
        currentResults: array.isRequired,
        hidden: bool.isRequired
    }

    componentWillReceiveProps({ shouldEndExercise, fireCompleteExercise, nextExercise: { exerciseKey }, currentResults }) {
        if (shouldEndExercise) {
            return fireCompleteExercise(exerciseKey, currentResults)
        }
    }

    render() {
        return branch(
            this.props.hidden,
            <RenderNothing />,
            <FooterButtons {...this.props} />
        )
    }
}
