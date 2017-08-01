import React from 'react'
import { string, number } from 'prop-types'
import glamorous from 'glamorous'

const icons = {
    facebook:
        'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
}

export const Icon = ({ icon, size, color }) => {
    const Svg = glamorous.svg({
        display: 'inline-block',
        verticalAlign: 'middle'
    })

    const Path = glamorous.path({
        fill: color
    })

    return (
        <Svg width={`${size}px`} height={`${size}px`} viewBox='0 0 1024 1024'>
            <Path d={icons[icon]} />
        </Svg>
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
