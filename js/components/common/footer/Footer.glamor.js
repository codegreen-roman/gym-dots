import { css } from 'glamor'
import { variables } from '../../../utils/variables'

export const footerStyle = css({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    background: variables.$blueGradient
})
