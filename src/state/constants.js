import { equals } from 'ramda'

export const WORKOUT_STATUS = {
    notStarted: 'notStarted',
    starting: 'starting',
    started: 'started',
    completed: 'completed',
    aborted: 'aborted',
    intermediate: 'intermediate',
    isStarting: equals('starting'),
    isStarted: equals('started'),
    isNotStarted: equals('notStarted'),
}


