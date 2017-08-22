import React from 'react'
import glamorous from 'glamorous'
import { string } from 'prop-types'
import { userPic } from './UserImage.helper'

const ImgForUser = glamorous.img({
    width: '3rem',
    borderRadius: '2rem'
})

export const UserImage = ({ image }) => (
    <ImgForUser src={image} />
)

UserImage.defaultProps = {
    image: userPic
}

UserImage.propTypes = {
    image: string
}
