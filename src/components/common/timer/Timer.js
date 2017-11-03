import { Observable, Subject } from 'rxjs'
import React from 'react'
import { array, func, string } from 'prop-types'
import { timerConnect } from './Timer.connect'

export class _Timer extends React.Component {
    static propTypes = {
        workoutStatus: string,
        children: array,
        start: func,
        complete: func,
    }

    constructor(props) {
        super(props)

        this.timer$ = Observable.interval(1000)
        this.start$ = new Subject()
        this.kill$ = new Subject()
        this.state = {
            timeSpent: 0
        }

        this.stream$ = this.start$
            .flatMap(() => this.timer$)
            .map(() => 1)
            .scan((acc, val) => acc + val)
            .takeUntil(this.kill$)

        this.stream$
            .subscribe(timeSpent => this.setState({ timeSpent }))
    }

    componentWillReceiveProps({ workoutStatus }) {
        if (workoutStatus === 'started') {
            this.start$.next()
        }

        if (workoutStatus === 'completed') {
            this.kill$.next()
        }
    }

    render() {
        const { children, start, complete, workoutStatus } = this.props
        return (<div>
            {children}
            <button disabled={workoutStatus === 'started'} onClick={start}>start</button>
            <button disabled={workoutStatus !== 'started'} onClick={complete}>complete</button>

            <div>{this.state.timeSpent}</div>
        </div>)
    }
}

export const Timer = timerConnect(_Timer)
