import { mapStateToProps } from '../Timer.connect'

describe('Timer connect functions', () => {

    const setupStateAndProps = workoutStatus => ({
        state: {
            workoutStatus
        },
        ownProps: {
            children: []
        }
    })

    describe('for started status', () => {
        const { state, ownProps } = setupStateAndProps('started')
        it('should return props for the component', () => {
            const actual = mapStateToProps(state, ownProps)
            expect(actual).toMatchSnapshot()
        })
    })

    describe('for completed status', () => {
        it('should return props for the component', () => {
            const { state, ownProps } = setupStateAndProps('completed')
            const actual = mapStateToProps(state, ownProps)
            expect(actual).toMatchSnapshot()
        })
    })

    describe('for starting status', () => {
        it('should return props for the component', () => {
            const { state, ownProps } = setupStateAndProps('starting')
            const actual = mapStateToProps(state, ownProps)
            expect(actual).toMatchSnapshot()
        })
    })
})
