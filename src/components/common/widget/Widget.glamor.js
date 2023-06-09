import { css } from 'glamor'
import { variables } from '../../../utils/variables'

export const widgetContainer = css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    lineHeight: '40px',
    padding: '0 15px'
})

export const widgetDataContainer = css({
    marginLeft: '10px'
})

export const widgetDataNumber = css({
    fontSize: '29px',
    display: 'inline-block',
    color: variables.$color2
})

export const widgetDataUnits = css({
    fontSize: '14px',
    display: 'inline-block',
    marginLeft: '5px',
    color: variables.$color2
})
