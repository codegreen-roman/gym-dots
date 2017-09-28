import React, { PureComponent } from 'react'
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

export class Welcome extends PureComponent {

    static propTypes = {
        loginWith: func.isRequired,
        status: string.isRequired,
        dateStr: string.isRequired,
        loginGuest: func.isRequired,
        history: object
    }

    componentWillReceiveProps({status, history}) {
        const isLoggedIn = equals(status, 'loggedIn')
        if (isLoggedIn) {
            history.push('/in/activity/pre')
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
                            <Icon icon='facebook' size={30} color={variables.$color2} />
                            <button {...buttonText} data-test='facebook' onClick={() => loginWith('facebook')}>login with facebook</button>
                        </div>
                        <div {...buttonAndIconWrap}>
                            <Icon icon='twitter' size={30} color={variables.$color2} />
                            <button {...buttonText} data-test='twitter' onClick={() => loginWith('twitter')}>login with twitter</button>
                        </div>
                        <div {...buttonAndIconWrap}>
                            <Icon icon='guest' size={30} color={variables.$color2} />
                            <button {...buttonText} data-test='guest' onClick={loginGuest}>login as guest</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
