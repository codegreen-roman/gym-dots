import styled from 'emotion/react'

export const OverlayStyled = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events:none;
    opacity: ${props => (props.visible ? '0.8' : '0')};
    transition: ${props => (props.visible ? 'opacity 0.5s' : '')};
`
