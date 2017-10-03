import React, { Component } from 'react'
import { func, object, string } from 'prop-types'
import { equals } from 'ramda'
import {
    welcomeSection,
    welcomeHeader,
    welcomeBody,
    buttonsWrapper,
    buttonAndIconWrap,
    buttonText,
    headerDate,
    headerText
} from './Welcome.glamor.js'
import { Icon } from '@components/common/icon/Icon'
import { variables } from '@utils/variables'

export class Welcome extends Component {

    static propTypes = {
        loginWith: func.isRequired,
        loginGuest: func.isRequired,
        status: string.isRequired,
        dateStr: string.isRequired,
        history: object
    }

    componentWillReceiveProps({status, history}) {
        const isLoggedIn = equals(status, 'loggedIn')
        if (isLoggedIn) {
            history.push('/activity/pre')
        }
    }

    render() {
        const { status, loginGuest, loginWith, dateStr } = this.props
        const isLoggedIn = equals(status, 'loggedIn')
        if (isLoggedIn) {
            return null
        }

        return (
            <section {...welcomeSection}>
                <div {...welcomeHeader}>
                    <div {...headerDate} data-test='date'>{dateStr}</div>
                    <div {...headerText}>Gym dots</div>
                </div>
                <div {...welcomeBody}>
                    <div>Welcome!</div>
                    <div>Login into gym dots systems</div>
                    <div {...buttonsWrapper}>
                        <div {...buttonAndIconWrap}>
                            <Icon
                                iconName='facebook'
                                color={variables.$color2}
                                style={{
                                    width: 26,
                                    height: 26
                                }}
                            />
                            <button {...buttonText} data-test='facebook' onClick={() => loginWith('facebook')}>login with facebook</button>
                        </div>
                        <div {...buttonAndIconWrap}>
                            <Icon
                                iconName='twitter'
                                color={variables.$color2}
                                viewBox='0 0 20 17'
                                style={{
                                    width: 23,
                                    height: 23
                                }}
                            />
                            <button {...buttonText} data-test='twitter' onClick={() => loginWith('twitter')}>login with twitter</button>
                        </div>
                        <div {...buttonAndIconWrap}>
                            <Icon
                                iconName='guest'
                                color={variables.$color2}
                                style={{
                                    width: 26,
                                    height: 26
                                }}
                            />
                            <button {...buttonText} data-test='guest' onClick={loginGuest}>login as guest</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
