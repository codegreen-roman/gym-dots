import React from 'react'
import { string, oneOf } from 'prop-types'
import { Path } from './Arc.glamor'
import { pure } from 'recompose'

const _Arc = ({ d, arcClass }) => {
    return <Path d={d} arcClass={arcClass} />
}

_Arc.propTypes = {
    d: string.isRequired,
    arcClass: oneOf(['toBeDone', 'failed', 'completed'])
}

export const Arc = pure(_Arc)
