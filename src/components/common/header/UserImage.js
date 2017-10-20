import React from 'react'
import glamorous from 'glamorous'
import { string } from 'prop-types'
import { branch, RenderNothing } from '@utils/helpers'

const ImgForUser = glamorous.img({
    width: '3rem',
    borderRadius: '2rem'
})

export const UserImage = ({ image }) =>
    branch(
        image,
        <ImgForUser src={image} alt='This is your avatar' />,
        <RenderNothing />
    )

UserImage.propTypes = {
    image: string
}

UserImage.defaultProps = {
    image: ''
}
