import { css } from 'glamor'
import { variables } from '../../../../../utils/variables'


// List
export const exerciseList = css({
    display: 'flex',
    flexFlow: 'column wrap',
    listStyleType: 'none',
    padding: '0', //remove with reset.css
    margin: '0', //remove with reset.css
    paddingLeft: variables.$listLeftInnerPadding,
    marginBottom: '20px'
})


// List Header
export const exerciseListHeader = css({
    display: 'flex',
    borderTop: `1px solid ${variables.$color0}`,
    borderBottom: `1px solid ${variables.$color0}`,
    padding: `10px 0 10px ${variables.$listLeftInnerPadding}`,
    alignItems: 'center'
})

export const exerciseListHeaderDot = css({
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    background: variables.$color4,
    border: `3px solid ${variables.$color3}`
})

export const exerciseListHeaderText = css({
    fontSize: '16px',
    fontWeight: '500',
    color: variables.$color1,
    marginLeft: variables.$listLeftMargin,
    textTransform: 'capitalize'
})


// List Row
export const exerciseRow = css({
    display: 'flex',
    flexFlow: 'row nowrap'
})

export const exerciseDataWrapper = css({
    width: '100%',
    marginLeft: variables.$listLeftMargin,
    marginTop: '40px',
})

export const exerciseTitle = css({
    fontSize: '22px',
    fontWeight: '600',
    color: variables.$color2,
    textTransform: 'capitalize'
})

export const exerciseDetails = css({
    fontSize: '14px',
    fontWeight: '100',
    color: variables.$color1
})

export const exerciseElementsWrapper = css({
    marginTop: '-10px',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    background: '#fff',
})

export const exerciseLine = css({
    height: '55px',
    width: '3px',
    background: variables.$color4,
    borderRadius: '3px',
})

export const exerciseDot = css({
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    border: `3px solid ${variables.$color3}`,
    margin: '12px 0',
})
