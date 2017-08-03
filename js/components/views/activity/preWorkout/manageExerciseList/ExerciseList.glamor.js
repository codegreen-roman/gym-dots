import { css } from 'glamor'

export const exerciseListHeader = css({
    display: 'flex',
    borderTop: '1px solid #ebf0f7',
    borderBottom: '1px solid #ebf0f7'
})

export const exerciseList = css({
    display: 'flex',
    flexFlow: 'column wrap',
    listStyleType: 'none',
    padding: '0'
})

export const exerciseRow = css({
    padding: '10px'
})

export const exerciseTitle = css({
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#606b7b'
})

export const exerciseDetails = css({
    fontSize: '15px',
    color: '#929aa6'
})
