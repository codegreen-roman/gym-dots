import React from 'react'
import glamorous from 'glamorous'
import { string } from 'prop-types'

const ImgForUser = glamorous.img({
    width: '3rem',
    borderRadius: '2rem'
})

export const UserImage = ({ image }) => {

    if (image) return <ImgForUser src={image} alt='This is your avatar' />
    return null
}

UserImage.propTypes = {
    image: string
}
