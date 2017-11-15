import { variables } from '../../../utils/variables'

// Base button styles
export const baseButtonStyles = {
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: '500',
    textAlign: 'center',
    color: variables.$color2,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'stretch',
    border: 'none',
    background: 'none',
    overflow: 'hidden',
    textDecoration: 'none',
    transition: 'all 300ms',
    outline: 'none'
}

// Link wrapping menu-icon
export const linkButtonStyles = {
    ...baseButtonStyles,
    padding: '0',
    border: '0'
}

// Login with twitter, facebook, guest
export const loginButtonStyles = {
    ...baseButtonStyles,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: variables.$color2,
    borderRadius: '2px',
    padding: '4px 16px 4px 8px'
}

// Start, Failed, Done buttons
export const footerButtonStyles = {
    ...baseButtonStyles,
    padding: '0',
    letterSpacing: '1px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    color: variables.$color3,
    margin: '0 10px'
}

