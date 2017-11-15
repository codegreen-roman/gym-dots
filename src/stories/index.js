import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { LoginButton } from '../components/common/button/Button'
import { TwitterIcon, FacebookIcon, GuestIcon, DumbbellsIcon, CheckIcon } from '../components/common/icon/Icon'
import { Widget } from '../components/common/widget/Widget'

storiesOf('LoginButton')
    .add('with twitter icon', () => (
        <LoginButton>
            <TwitterIcon /> Login with twitter
        </LoginButton>
    ))
    .add('with facebook icon', () => (
        <LoginButton>
            <FacebookIcon /> Login with facebook
        </LoginButton>
    ))
    .add('with guest icon', () => (
        <LoginButton>
            <GuestIcon /> Login as guest
        </LoginButton>
    ))

storiesOf('Widget')
    .add('with dumbbells icon', () => (
        <Widget dataNumber={10} dataUnits='kg'>
            <DumbbellsIcon big />
        </Widget>
    ))
    .add('with check icon', () => (
        <Widget dataNumber={10} dataUnits='reps'>
            <CheckIcon big />
        </Widget>
    ))
