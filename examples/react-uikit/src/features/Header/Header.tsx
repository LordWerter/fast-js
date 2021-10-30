import React from 'react'
import Logo from '../Logo'
import NavBar from '../NavBar'
import { CWrap } from './Header.styles'

const Header = () => {
    return (
        <CWrap sizeId={'desktop'}>
            <Logo/>
            <NavBar/>
        </CWrap>    
    )
}

export default Header
