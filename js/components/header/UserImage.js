import React from 'react'
import { image } from 'faker'

const userPic = image.avatar()
const imgStyle = {
    width: '3rem',
    borderRadius: '2rem'
}

export const UserImage = () => (
    <img style={imgStyle} src={userPic} />
)
