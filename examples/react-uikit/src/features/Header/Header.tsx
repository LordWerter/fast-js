import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import MenuButton from '../MenuButton';
import NavBar from '../NavBar';
import { CWrap, Logo } from './Header.styles';


const Header: React.FC = (props): JSX.Element => {
    const [navBar, setNavBar] = useState({
        isHidden: true,
    })
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Header };

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Logo sizeId={'desktop'} theme={theme.logo} />
            <div onClick={(e:React.MouseEvent)=>(setNavBar({...navBar, isHidden: false, }))}>
                <MenuButton value={navBar.isHidden} />
                <NavBar />
            </div>
        </CWrap>
    )
};

export default Header;
