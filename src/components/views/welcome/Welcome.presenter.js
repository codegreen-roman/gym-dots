import React from 'react'
import {
    welcomeSection,
    welcomeHeader,
    welcomeBody,
    welcomeTextWrapper,
    buttonsWrapper,
    buttonAndIconWrap,
    headerDate,
    headerText
} from './Welcome.glamor.js'
import { func, string } from 'prop-types'
import { LoginButton } from '@components/common/button/Button'
import { FacebookIcon, TwitterIcon, GuestIcon } from '@components/common/icon/SvgIcon'
import { Aux } from '../../../utils/enhancers'

/* Welcome header and body holder */
export const WelcomePresenter = props => (
    <section {...welcomeSection}>
        <div {...welcomeHeader}>
            <WelcomeHeader {...props} />
        </div>
        <div {...welcomeBody}>
            <WelcomeBody {...props} />
        </div>
    </section>
)

/* WelcomeHeader: contains Date and App name */
export const WelcomeHeader = ({ dateStr }) => (
    <Aux>
        <div {...headerDate} data-test='date'>
            {dateStr}
        </div>
        <div {...headerText}>Gym dots</div>
    </Aux>
)

WelcomeHeader.propTypes = {
    dateStr: string.isRequired
}

/* WelcomeBody: contains welcoming message and login butttons */
export const WelcomeBody = ({ authAnonymously, authWith }) => (
    <Aux>
        <div {...welcomeTextWrapper}>
            <div style={{ fontWeight: '700' }}>Welcome!</div>
            <div>Login into gym dots system.</div>
        </div>
        <div {...buttonsWrapper}>
            <div {...buttonAndIconWrap}>
                <LoginButton data-test='facebook' onClickAction={() => authWith('facebook')}>
                    <FacebookIcon />
                    <span style={{ marginLeft: '10px' }}>login with facebook</span>
                </LoginButton>
            </div>
            <div {...buttonAndIconWrap}>
                <LoginButton data-test='twitter' onClickAction={() => authWith('twitter')}>
                    <TwitterIcon />
                    <span style={{ marginLeft: '10px' }}>login with twitter</span>
                </LoginButton>
            </div>
            <div {...buttonAndIconWrap}>
                <LoginButton data-test='guest' onClickAction={() => authAnonymously()}>
                    <GuestIcon />
                    <span style={{ marginLeft: '10px' }}>login as guest</span>
                </LoginButton>
            </div>
        </div>
    </Aux>
)

WelcomeBody.propTypes = {
    authWith: func.isRequired,
    authAnonymously: func.isRequired
}
