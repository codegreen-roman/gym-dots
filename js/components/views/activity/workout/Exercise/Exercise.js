import { Observable, Subject } from 'rxjs'
import React from 'react'
import { equals, compose, not, inc } from 'ramda'
import { string, arrayOf, number, bool } from 'prop-types'
import { CircleProgress } from '../../../../common/circle/CircleProgress'

const compare = compose(not, equals)
const isResultDiff = (oldResults, newResults) => {
    return compare(
        JSON.stringify(oldResults),
        JSON.stringify(newResults)
    )
}

export class Exercise extends React.Component {

    static propTypes = {
        status: string.isRequired,
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
        const style = {
            fontSize: '110%',
            color: seconds > restTime ? '#DC143C' : '#006400'
        }

        if (this.state.seconds > 0) {
            return (<div style={style}>
                Resting for {this.state.seconds} / {restTime}
            </div>)
        }

        return null
    }

    render() {

        const {
            status,
            restTime,
            sets,
            setsLeft,
            reps,
            weight,
            results
        } = this.props

        return (
            <section>
                <div>
                    {status}
                </div>
                <div>
                    weight: {weight}
                </div>
                <div>
                    reps: {reps}
                </div>
                <div>
                    sets {sets - setsLeft} / {sets} done
                </div>
                <div>the time</div>
                <div>
                    results : {JSON.stringify(results, null, 2)}
                </div>
                <div>
                    setsLeft : {setsLeft}
                </div>
                <div>
                    <button>Make pause</button>
                </div>
                {this.renderRestingTimer()}
                <div>
                    {restTime} sec rest time
                </div>
                <CircleProgress sets={sets} results={results} setsDone={sets - setsLeft} />
            </section>
        )
    }
}
