import React from 'react'
import { number, string } from 'prop-types'
import {  } from './Widget.glamor'
import { Icon } from '../icon/Icon'
import {
    widgetContainer,
    widgetDataContainer,
    widgetDataNumber,
    widgetDataUnits
} from './Widget.glamor.js'

export const Widget = ({iconTitle, iconSize, iconColor, dataNumber, dataUnits}) => {
    return (
        <div {...widgetContainer} >
            <Icon icon={iconTitle} size={iconSize} color={iconColor} />
            <div {...widgetDataContainer}>
                <div {...widgetDataNumber}>{dataNumber}</div>
                <div {...widgetDataUnits}>{dataUnits}</div>
            </div>
        </div>
    )
}

Widget.propTypes = {
    iconTitle: string,
    iconSize: number,
    iconColor: string,
    dataNumber: number,
    dataUnits: string
}
