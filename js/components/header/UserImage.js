import React from 'react'
import { image } from 'faker'
import glamorous from 'glamorous'

const userPic = image.avatar()

const ImgForUser = glamorous.img({
    width: '3rem',
    borderRadius: '2rem'
})

export const UserImage = () => (
    <ImgForUser src={userPic} />
)
