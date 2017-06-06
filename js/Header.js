import React from 'react'

const _Header = props => (
    <section>
        <h4>I am a header</h4>
        <div>{props.session.day}</div>
    </section>
)

export const Header = _Header
