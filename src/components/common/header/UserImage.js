import React from 'react'
import glamorous from 'glamorous'
import { userPicStyles, userNameStyles } from './UserImage.glamor'
import { string } from 'prop-types'
import { always, cond, T } from 'ramda'
import { isNotNil } from '../../../utils/helpers'
import { Aux } from '../../../utils/enhancers'

/* UserPic: holding user image */
export const UserPic = ({ image, ...other }) =>
    <StyledUserImage {...other} src={image} alt='This is your avatar' />

UserPic.propTypes = { image: string }
const StyledUserImage = glamorous.img(userPicStyles)

/* UserName: holding username */
export const UserName = ({ userDisplayName, ...other }) =>
    <StyledUserName {...other}>{userDisplayName} </StyledUserName>

UserName.propTypes = { userDisplayName: string }
const StyledUserName = glamorous.div(userNameStyles)

/* WithUserNameHOC: adds username below image */
const WithUserNameHOC = (Component) => {
    const WithUserName = props => (
        <Aux>
            <Component {...props} />
            <UserName
                data-test='username'
                userDisplayName={props.userDisplayName}
            />
        </Aux>
    )
    WithUserName.propTypes = { userDisplayName: string }
    return WithUserName
}

export const WithUserName = WithUserNameHOC(UserPic)

/* Conditions */
const hasImage = (props) => isNotNil(props.image)
const hasUserNameAndImage = (props) => isNotNil(props.userDisplayName) && isNotNil(props.image)

/* Conditional render */
export const conditionalRender = (props) => cond([
    [hasUserNameAndImage, always(<WithUserName key='with-username' {...props} />)],
    [hasImage, always(<UserPic key='user-pic' image={props.image} />)],
    [T, always(null)]
])(props)

export const UserImage = (props) => <Aux>{conditionalRender(props)}</Aux>
