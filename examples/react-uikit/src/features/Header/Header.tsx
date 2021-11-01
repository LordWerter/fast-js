import React from 'react'
import { IProps } from '../ImageSlides/ImageSlides'
import Logo from '../Logo'
import NavBar from '../NavBar'
import { CWrap } from './Header.styles'

const Header: React.FC<IProps> = (props) => {
    return (
        <CWrap sizeId={'desktop'}>
            <Logo/>
            <NavBar/>
        </CWrap>    
    )
}

export default Header
