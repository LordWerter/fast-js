import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TElementProps } from '../../definitions';
import MenuBtn from '../MenuBtn';
import NavBar from '../NavBar';
import { CWrap, Logo } from './Header.styles';

export type IProps = TElementProps & {
    onClick?: (event: Event) => any;
};

const Header: React.FC<IProps> = (props): JSX.Element => {
    const [navBarVisibility, setNavBarVisibility] = useState(false);
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Header };

    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap} >
            <Logo sizeId={'desktop'} theme={theme.logo} />
            <div className="menu_wrapper" >
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
            </div>

        </CWrap>
    )
};

export default Header;
