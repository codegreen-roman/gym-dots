import { connect } from 'react-redux'
import { cond, equals, always, T, ifElse } from 'ramda'
import { Observable } from 'rxjs'

export const mapStateToProps = ({ workoutStatus }, { children }) => {

    const getKillingObservable = ifElse(
        equals('completed'),
        always(Observable.of(42)),
        always(Observable.empty())
    )

    const getTimerObservable = cond([
        [equals('started'), always(Observable.interval(1000))],
        [T, always(Observable.empty())]
    ])

    const time$ = getTimerObservable(workoutStatus)
    const killer$ = getKillingObservable(workoutStatus)

    return {
        time$,
        killer$,
        children
    }
}

export const mapDispatchToProps = () => {

}

export const timerConnect = connect(mapStateToProps, mapDispatchToProps)
