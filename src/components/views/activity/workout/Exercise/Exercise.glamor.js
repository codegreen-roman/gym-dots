import { css } from 'glamor'

export const restingTimer = isMoreThanRestTime =>
    css({
        fontSize: '110%',
        color: isMoreThanRestTime ? '#DC143C' : '#006400'
    })


export const exerciseSection = css({
    position: 'relative'
})

export const exerciseHeader = css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '20px 0'
})

export const exerciseBody = css({
    position: 'relative'
})


export const circleProgressWrapper = css({

})

export const exerciseFooter = css({

})

