import React from 'react'
import { string } from 'prop-types'
import { Path } from './Arc.glamor'
import { pure } from 'recompose'

const _Arc = ({ d, arcClass }) => {
    return <Path d={d} arcClass={arcClass} />
}

_Arc.propTypes = {
    d: string.isRequired,
    arcClass: string.isRequired
}

export const Arc = pure(_Arc)
