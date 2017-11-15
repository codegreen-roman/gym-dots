import { css } from 'glamor'
import { variables } from '../../../utils/variables'

export const header = css({
    height: '147px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    padding: variables.$headerWrappingPadding,
    paddingLeft: variables.$listLeftInnerPadding
})

export const headerLeftSide = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '60px'
})

export const headerMenu = css({
    color: variables.$color1,
    position: 'absolute',
    left: '25px',
    top: '25px'
})

export const userWrapper = css({
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column nowrap'
})

export const headerDataWrap = css({
    textTransform: 'uppercase',
    color: variables.$color1,
    fontSize: '14px',
    fontWeight: '700'
})

export const headerDate = css({
    textTransform: 'uppercase',
    color: variables.$color1,
    fontSize: '14px',
    fontWeight: '700'
})

export const headerText = css({
    color: variables.$color2,
    fontSize: '23px',
    textTransform: 'capitalize',
    fontWeight: '600'
})

