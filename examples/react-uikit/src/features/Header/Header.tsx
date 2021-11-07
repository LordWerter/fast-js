import { useTheme } from '@emotion/react'
import React from 'react'
import { IProps } from '../ImageSlides/ImageSlides'
import MenuButton from '../MenuButton'
import { CWrap, Logo } from './Header.styles'

const Header: React.FC<IProps> = (props): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.Header};

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Logo sizeId={'desktop'} theme={theme.logo} />
            <MenuButton/>
            
        </CWrap>    
    )
}

export default Header;
