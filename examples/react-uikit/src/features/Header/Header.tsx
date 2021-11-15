import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import MenuBtn from '../MenuBtn';
import NavBar from '../NavBar';
import { CWrap, Logo, MenuWrap } from './Header.styles';

export type IProps = TElementProps & {
    onClick?: (event: Event) => any;
};

export const Header: React.FC<IProps> = (props): JSX.Element => {
    const [navBarVisibility, setNavBarVisibility] = useState(false);
    //@ts-ignore
    const theme = { ...useTheme().Header };

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap} >
            <Link to={'/'}><Logo sizeId={'desktop'} theme={theme.logo} /></Link>
            <MenuWrap sizeId={'desktop'} theme={theme.menuwrap} >
                <MenuBtn
                    sizeId={'desktop'}
                    setNavBarVisibility={setNavBarVisibility}
                    navBarVisibility={navBarVisibility}
                />
                <NavBar
                    sizeId={'desktop'}
                    visibility={navBarVisibility}
                    onClick={(e) => e.stopPropagation()}
                />
            </MenuWrap>

        </CWrap>
    )
};

export default Header;
