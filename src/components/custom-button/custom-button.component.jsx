import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ value, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        { value }
    </button>
)

export default CustomButton;