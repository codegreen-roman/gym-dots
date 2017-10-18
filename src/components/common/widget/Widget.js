import React from 'react'
import { number, string } from 'prop-types'
import { Icon } from '../icon/Icon'
import {
    widgetContainer,
    widgetDataContainer,
    widgetDataNumber,
    widgetDataUnits
} from './Widget.glamor'

export const Widget = ({iconName, iconColor, dataNumber, dataUnits, viewBox, width, height }) => {
    return (
        <div {...widgetContainer} >
            <Icon
                iconName={iconName}
                color={iconColor}
                viewBox={viewBox}
                width={width}
                height={height}
            />
            <div {...widgetDataContainer}>
                <div {...widgetDataNumber}>{dataNumber}</div>
                <div {...widgetDataUnits}>{dataUnits}</div>
            </div>
        </div>
    )
}

Widget.propTypes = {
    iconName: string.isRequired,
    iconColor: string.isRequired,
    dataNumber: number.isRequired,
    dataUnits: string.isRequired,
    width: number.isRequired,
    height: number.isRequired,
    viewBox: string.isRequired
}

