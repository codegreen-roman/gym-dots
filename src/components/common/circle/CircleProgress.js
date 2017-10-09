import React from 'react'
import { array, number, oneOfType, arrayOf, node } from 'prop-types'
import {
    generateArcPaths,
    generateArcClasses
} from './CircleProgress.helper'
import R from 'ramda'
import { circleProgressWrapper, circleInnerWrapper } from './CircleProgress.glamor'
import { Arc } from './Arc'

// Adjust x, y to resize circle
const CIRCLE_CENTER_X = 110
const CIRCLE_CENTER_Y = 110

const CIRCLE_RADIUS = CIRCLE_CENTER_X - 10
const CIRCLE_WIDTH = 110 * 2
const CIRCLE_HEIGHT = 110 * 2
const SPACE_BETWEEN_ARCS = 10


const mapWithIndex = R.addIndex(R.map)

export class CircleProgress extends React.Component {

    static defaultProps = {
        sets: 5
    }

    static propTypes = {
        results: array.isRequired,
        sets: number.isRequired,
        children: oneOfType([
            arrayOf(node),
            node
        ]).isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            arcClasses: generateArcClasses(props.sets, props.results),
            arcPaths: generateArcPaths(
                CIRCLE_CENTER_X,
                CIRCLE_CENTER_Y,
                CIRCLE_RADIUS,
                SPACE_BETWEEN_ARCS,
                props.sets)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            arcClasses: generateArcClasses(nextProps.sets, nextProps.results)
        })
    }

    renderArcs() {
        const { arcClasses, arcPaths } = this.state
        return mapWithIndex((ctrl, idx) => <Arc key={idx} d={R.nth(idx, arcPaths)} arcClass={ctrl} />)(arcClasses)
    }

    render() {
        return (
            <div {...circleProgressWrapper}>
                <svg
                    width={CIRCLE_WIDTH}
                    height={CIRCLE_HEIGHT}
                >
                    <g>{this.renderArcs()}</g>
                </svg>
                <div {...circleInnerWrapper}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}
