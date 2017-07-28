import React from 'react'
import { timerConnect } from './Timer.connect'

export const _Timer = ({ children }) => {
    return <div>{children}</div>
}

export const Timer = timerConnect(_Timer)

