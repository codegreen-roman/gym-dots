import glamorous from 'glamorous'
import { variables } from '../../../utils/variables'

export const StyledSvg = glamorous.svg(
    {
        display: 'inline-block',
        color: 'black',
        height: '24px',
        width: '24px',
        userSelect: 'none',
        verticalAlign: 'middle'
    },
    ({ fillColor }) => (
        fillColor
            ? { fill: fillColor }
            : { fill: variables.$color2 }
    ),
    ({ big }) => (
        big
            ? { width: '36px', height: '36px' }
            : { width: '24px', height: '24px' }
    )
)
