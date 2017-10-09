import { Observable, Subject } from 'rxjs'
import React from 'react'
import { equals, compose, not, inc } from 'ramda'
import { arrayOf, number, bool } from 'prop-types'
import { CircleProgress } from '../../../../common/circle/CircleProgress'
import { Widget } from '@components/common/widget/Widget'
import {
    restingTimer,
    exerciseSection,
    exerciseHeader,
    exerciseBody,
    exerciseFooter
} from './Exercise.glamor'

const compare = compose(not, equals)
const isResultDiff = (oldResults, newResults) => {
    return compare(
        JSON.stringify(oldResults),
        JSON.stringify(newResults)
    )
}

export class Exercise extends React.Component {

    static propTypes = {
        restTime: number.isRequired,
        sets: number.isRequired,
        setsLeft: number.isRequired,
        reps: number.isRequired,
        weight: number.isRequired,
        results: arrayOf(bool).isRequired
    }

    state = {
        seconds: 0
    }

    constructor(props) {
        super(props)

        const sideEffect = seconds => {
            this.setState({
                seconds
            })
        }

        this.restingStart$ = new Subject()
        this.kill$ = new Subject()

        this.restingStart$
            .switchMap(() => Observable.timer(0, 1000)
                .take(this.props.restTime + 20))
            .map(inc)
            .takeUntil(this.kill$)
            .subscribe(sideEffect)

    }

    componentWillUnmount() {
        this.kill$.next()
    }

    componentWillUpdate({results : newResults}) {

        const { results : oldResults } = this.props

        if (isResultDiff(oldResults, newResults)) {
            this.restingStart$.next()
        }
    }

    renderRestingTimer = () => {

        const { seconds } = this.state
        const { restTime } = this.props

        if (this.state.seconds > 0) {
            return (
                <div {...restingTimer(seconds > restTime)}>
                    Resting for {this.state.seconds} / {restTime}
                </div>)
        }

        return null
    }

    render() {

        const {
            sets,
            setsLeft,
            reps,
            weight,
            results
        } = this.props
        const setsDone = (sets - setsLeft) / sets
        return (
            <section {...exerciseSection}>
                <div {...exerciseHeader}>
                    <Widget
                        iconName='dumbbells'
                        iconColor='red'
                        dataNumber={weight}
                        dataUnits='kg'
                        viewBox='0 0 34 20'
                        style={{
                            width: 34,
                            height: 20
                        }}
                    />
                    <Widget
                        iconName='check'
                        iconColor='red'
                        dataNumber={reps}
                        dataUnits='reps'
                        viewBox='0 0 27 27'
                        style={{
                            width: 23,
                            height: 23
                        }}
                    />
                </div>
                <div {...exerciseBody}>
                    <CircleProgress
                        sets={sets}
                        results={results}
                        setsDone={sets - setsLeft}
                    >
                        <div>sets {setsDone} done </div>
                        {this.renderRestingTimer()}
                    </CircleProgress>

                </div>
                <div {...exerciseFooter}>
                    results : {JSON.stringify(results, null, 2)}
                </div>
            </section>
        )
    }
}
