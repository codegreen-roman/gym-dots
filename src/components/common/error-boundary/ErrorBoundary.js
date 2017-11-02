import { object } from 'prop-types'
import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    static propTypes = {
        children: object
    }

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        const { children } = this.props

        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        return children
    }
}
