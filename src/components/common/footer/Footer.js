import React from 'react'
import { FooterButton } from './buttons/FooterButton'
import { footerStyle } from './Footer.glamor'
import { func, bool, object, array } from 'prop-types'
import { Flex } from 'glamorous-jsxstyle'

export class Footer extends React.Component {
    static propTypes = {
        blocked: bool.isRequired,
        training: bool.isRequired,
        hidden: bool.isRequired,
        fireStartWorkout: func.isRequired,
        fireCompleteExercise: func.isRequired,
        onSetFailed: func.isRequired,
        onSetDone: func.isRequired,
        shouldEndExercise: bool.isRequired,
        nextExercise: object,
        currentResults: array.isRequired
    }

    componentWillReceiveProps({ shouldEndExercise, fireCompleteExercise, nextExercise: { exerciseKey }, currentResults }) {
        if (shouldEndExercise) {
            return fireCompleteExercise(exerciseKey, currentResults)
        }
    }

    renderTrainingButtons() {

        const { fireStartWorkout, blocked, training, onSetFailed, onSetDone, nextExercise } = this.props
        const buttonTitle = blocked ? 'Starting ...' : 'Start Workout'

        const startButtonHandler = () => {
            fireStartWorkout(nextExercise)
        }

        if (training) {
            return (
                <Flex>
                    <FooterButton clickHandler={onSetFailed} data-test='failButton' disabled={false}>Failed</FooterButton>
                    <FooterButton clickHandler={onSetDone} data-test='doneButton' disabled={false}>Done</FooterButton>
                </Flex>
            )
        }

        return (
            <Flex>
                <FooterButton disabled={blocked} clickHandler={startButtonHandler}>{buttonTitle}</FooterButton>
            </Flex>
        )
    }

    render() {

        const { hidden } = this.props

        if (hidden) return null

        return (
            <footer {...footerStyle}>
                {this.renderTrainingButtons()}
            </footer>
        )
    }
}
