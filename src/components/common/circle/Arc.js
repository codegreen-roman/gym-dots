import React from 'react'
import { string, oneOf } from 'prop-types'
import { pure } from 'recompose'
import glamorous from 'glamorous'
import { pathStyles, arcTypes } from './Arc.glamor'

/* Arc, part of CircleProgress */
const _Arc = ({ d, arcClass }) => {
    return <Path d={d} arcClass={arcClass} />
}

_Arc.propTypes = {
    d: string.isRequired,
    arcClass: oneOf(['toBeDone', 'failed', 'completed'])
}

_Arc.defaultProps = {
    d: '',
    arcClass: 'toBeDone'
}

export const Arc = pure(_Arc)

/* Arc Styling logic */
export const Path = glamorous.path(
    pathStyles,
    (props) => ({
        stroke: arcTypes[props.arcClass]
    })
)
