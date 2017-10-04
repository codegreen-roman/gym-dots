import { css } from 'glamor'
import { variables } from '@utils/variables'

export const header = css({
    height: '107px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    padding: variables.$headerWrappingPadding,
    paddingLeft: variables.$listLeftInnerPadding
})

export const headerLeftSide = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

export const menu = css({
    color: variables.$color1
})

export const headerDataWrap = css({
    textTransform: 'uppercase',
    color: variables.$color1,
    fontSize: '14px',
    fontWeight: '700',
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

