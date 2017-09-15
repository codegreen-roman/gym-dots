import React from 'react'

import { array, string, number } from 'prop-types'
import {
    generateArcPaths,
    generateArcClasses
} from './CircleProgress.helper'
import R from 'ramda'

const SPACE_BETWEEN_ARCS = 10
const CIRCLE_RADIUS = 100
const CIRCLE_CENTER_X = 150
const CIRCLE_CENTER_Y = 150


const mapWithIndex = R.addIndex(R.map)

const Arc = ({ d, arcClass }) => {
    const style = {
        fill: 'none',
        strokeWidth: '12px',
        stroke: arcClass === 'toBeDone' ? 'lightgrey' : arcClass === 'completed' ? 'lime' : 'tomato'
    }
    return <path d={d} style={style} />
}

Arc.propTypes = {
    d: string.isRequired,
    arcClass: string.isRequired
}

export class CircleProgress extends React.Component {

    static defaultProps = {
        sets: 5
    }

    static propTypes = {
        results: array.isRequired,
        sets: number.isRequired
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
        return mapWithIndex((ctrl, idx) => <Arc key={idx} d={R.nth(idx, arcPaths)} arcClass={ctrl}/>)(arcClasses)
    }

    render() {
        return (
            <svg width='300px' height='300px'>
                <g>{this.renderArcs()}</g>
            </svg>
        )
    }

}
