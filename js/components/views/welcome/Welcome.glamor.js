import { css } from 'glamor'
import { variables } from '@utils/variables'


export const welcomeSection = css({
    position: 'relative',
    height: '100vh'
})

export const welcomeHeader = css({
    height: '147px',
    padding: '20px',
    
})

export const welcomeBody = css({
    position: 'relative',
    height: 'calc(100% - 147px)',
    padding: '20px',
    backgroundImage: variables.$blueGradient
})

export const headerDate = css({
    textTransform: 'uppercase',
    color: variables.$color1,
    fontSize: '14px',
    fontWeight: '700',
})

export const headerText = css({
    color: variables.$color2,
    fontSize: '23px',
})


export const buttonsWrapper = css({
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    flexFlow: 'column wrap',
})

export const buttonAndIconWrap = css({
    display: 'flex',
    flexFlow: 'row wrap',
})

export const buttonText = css({
    textTransform: 'capitalize',
    color: variables.$color2
})