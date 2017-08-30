import React from 'react'
import { keyframes } from 'emotion'
import styled from 'emotion/react'

const CountdownAnimation = keyframes`
    0% {text-indent:0}
    100% {text-indent:-3ch;}
`

const CountdownStyled = styled.div`
    &:before {
        content: '321';
        font-size: 40px;
        display: inline-block;
        width: 1ch;
        overflow: hidden;
        animation: ${CountdownAnimation} 3s steps(3) forwards;
    }
`

export const Countdown = () => {
    return <CountdownStyled />
}
