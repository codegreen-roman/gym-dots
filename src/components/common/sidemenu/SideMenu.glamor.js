import glamorous from 'glamorous'
import { variables } from '../../../utils/variables'

export const StyledSideMenu = glamorous.div(
    {
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999,
        width: '200px',
        height: '100vh',
        backgroundColor: '#fff',
        transform: 'translateX(-100%)',
        transition: '0.3s ease-in-out',
        borderRight: '1px solid grey',
        paddingTop: '20px',
        textAlign: 'center'
    },
    ({ toggleOn }) =>({
        transform: toggleOn ? 'translateX(0)' : 'translateX(-100%)'
    }))

export const StyledSideMenuList = glamorous.div({
    marginTop: '40px',
    marginBottom: '10px',
    fontSize: '18px'
})

export const StyledSideMenuListItem = glamorous.div({
    color: variables.$color2,
    fontWeight: 'bold'
})
