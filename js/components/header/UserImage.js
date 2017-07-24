import React from 'react'
import glamorous from 'glamorous'
import { userPic } from './UserImage.helper'

const ImgForUser = glamorous.img({
    width: '3rem',
    borderRadius: '2rem'
})

export const UserImage = () => (
    <ImgForUser src={userPic} />
)
