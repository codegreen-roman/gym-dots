import { css } from 'glamor'
import { variables } from '../../../../utils/variables'

export const footerButtonSingle = css({
    outline: 'none',
    height: '40px',
    textAlign: 'center',
    letterSpacing: '1px',
    textShadow: 'none',
    border: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    minHeight: '1em',
    display: 'inline-block',
    backgroundColor: 'transparent',
    fontSize: '20px',
    color: variables.$color3
})
