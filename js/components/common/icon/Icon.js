import React from 'react'
import { string, number } from 'prop-types'
import { svgStyle, pathStyle } from './Icon.glamor'

const icons = {
    facebook:
        'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
}

export const Icon = ({ icon, size, color }) => {
    return (
        <svg
            {...svgStyle}
            width={`${size}px`}
            height={`${size}px`}
            viewBox='0 0 1024 1024'
        >
            <path {...pathStyle(color)} d={icons[icon]} />
        </svg>
    )
}

Icon.propTypes = {
    icon: string.isRequired,
    size: number,
    color: string
}

Icon.defaultProps = {
    size: 16
}
