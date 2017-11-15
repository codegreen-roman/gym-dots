import React from 'react'
import { compose, branch, renderComponent, withState, withHandlers } from 'recompose'
import R from 'ramda'


/**
 * When matches predicate renderComponent
 * Third argument of branch is default to the identity function
 */
export const renderWhen = ({ when, render }) => {
    return branch(when, renderComponent(render))
}

/**
 * Render non-optimal states
 */
export const nonOptimalStates = states => {
    return compose(...states.map(renderWhen))
}

/**
 * Auxiliary element. A self-eradicating component for rendering multiple elements.
 * Example: const Root = () => return <Aux><div>1</div><div>2</div></Aux>
 * Benefit: wrapping <div> is not needed, DOM much cleaner
 */
export const Aux = props => props.children

/**
 * Add toggle functionality via HOC
 */
export const withToggle = compose(
    withState('toggledOn', 'toggle', false),
    withHandlers({
        show: ({ toggle }) => () => toggle(true),
        hide: ({ toggle }) => () => toggle(false),
        toggle: ({ toggle }) => () => toggle((current) => !current)
    })
)

/* Composition helpers */
/* eslint-disable react/display-name */
const combine = R.curry((c, o) => x => (
    <div>{c(x)} {o(x)}</div>)
)

export const combineComponents = (...args) => {
    const [first, ...rest] = args
    return R.reduce((acc, c) => combine(acc, c), first, rest)
}
