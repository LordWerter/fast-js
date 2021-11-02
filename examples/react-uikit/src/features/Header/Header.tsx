import { useTheme } from '@emotion/react'
import React from 'react'
import { IProps } from '../ImageSlides/ImageSlides'
import { CWrap, Logo, NavBar } from './Header.styles'

const Header: React.FC<IProps> = (props) => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.Header};

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Logo sizeId={'desktop'} theme={theme.logo} />
            <NavBar sizeId={'desktop'}/>
        </CWrap>    
    )
}

export default Header;
