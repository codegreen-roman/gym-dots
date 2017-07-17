import React from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { footerStyle } from './Footer.glamor'

const AButton = glamorous.button({
    flex: 1
})

const _Footer = () => (
    <footer {...footerStyle}>
        <AButton>Start Workout</AButton>
    </footer>
)

_Footer.propTypes = {}

const mapStateToProps = () => ({})

export { _Footer }
export const Footer = connect(mapStateToProps)(_Footer)
