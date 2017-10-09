import React from 'react'
import { string } from 'prop-types'
import { Path } from './Arc.glamor'

export const Arc = ({ d, arcClass }) => {
    return <Path d={d} arcClass={arcClass} />
}

Arc.propTypes = {
    d: string.isRequired,
    arcClass: string.isRequired
}
