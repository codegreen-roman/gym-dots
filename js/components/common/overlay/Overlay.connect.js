import { connect } from 'react-redux'
import { Overlay as _Overlay } from './Overlay'
import { WORKOUT_STATUS as ws } from '../../../state/constants'

export const mapStateToProps = ({ workoutStatus }) => ({
    visible: ws.isStarting(workoutStatus)
})

export const Overlay = connect(mapStateToProps)(_Overlay)
