import React from 'react'
import { number, string, node } from 'prop-types'
import { widgetContainer, widgetDataContainer, widgetDataNumber, widgetDataUnits } from './Widget.glamor'
import { pure } from 'recompose'

const _Widget = ({ dataNumber, dataUnits, children }) => {
    return (
        <div {...widgetContainer}>
            {children}
            <div {...widgetDataContainer}>
                <div data-test='data' {...widgetDataNumber}>{dataNumber}</div>
                <div data-test='units' {...widgetDataUnits}>{dataUnits}</div>
            </div>
        </div>
    )
}

_Widget.propTypes = {
    dataNumber: number.isRequired,
    dataUnits: string.isRequired,
    children: node
}

export const Widget = pure(_Widget)
