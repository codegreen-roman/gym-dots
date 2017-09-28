import { css } from 'glamor'

export const restingTimer = isMoreThanRestTime =>
    css({
        fontSize: '110%',
        color: isMoreThanRestTime ? '#DC143C' : '#006400'
    })
