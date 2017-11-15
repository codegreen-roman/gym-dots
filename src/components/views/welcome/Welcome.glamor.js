import { css } from 'glamor'
import { variables } from '@utils/variables'

export const welcomeSection = css({
    position: 'relative',
    height: '100vh'
})

export const welcomeHeader = css({
    height: '147px',
    padding: '20px'
})

export const welcomeBody = css({
    display: 'flex',
    flexFlow: 'column nowrap',
    height: 'calc(100% - 147px)',
    padding: '20px',
    backgroundImage: variables.$blueGradient
})

export const headerDate = css({
    textTransform: 'uppercase',
    color: variables.$color1,
    fontSize: '14px',
    fontWeight: '700',
    marginTop: '50px'
})

export const headerText = css({
    color: variables.$color2,
    fontSize: '23px'
})

export const welcomeTextWrapper = css({
    alignSelf: 'stretch',
    flexGrow: '1',
    fontSize: '26px',
    width: '70%',
    lineHeight: '33px',
    marginTop: '40px',
    color: variables.$color2
})

export const buttonsWrapper = css({
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%'
})

export const buttonAndIconWrap = css({
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: '10px'
})

export const buttonText = css({
    textTransform: 'capitalize',
    color: variables.$color2
})
