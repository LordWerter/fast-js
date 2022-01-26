import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../assets/hooks';
import { TElementProps } from '../../definitions';
import { CWrap, Line } from './NavBar.styles';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler;
};

export const NavBar: React.FC<IProps> = (props): JSX.Element => {
    const navbarVisibility = useTypedSelector(state => state.navbarVisibility);

    //@ts-ignore
    const theme = { ...useTheme().NavBar };
    return (
        <CWrap
            sizeId={'desktop'}
            onClick={(e) => e.stopPropagation()}
            theme={navbarVisibility.visibility ? theme.cwrap : theme.hidden}
        >
            <Link to={'/about'}>
                About us
            </Link>
            <Line
                sizeId={'desktop'}
                theme={theme.line}
            />
            <Link to={'/gallery'}>
                Gallery
            </Link>
            <Line
                sizeId={'desktop'}
                theme={theme.line}
            />
            <Link to={'/promo'}>
                Promo
            </Link>
            <Line
                sizeId={'desktop'}
                theme={theme.line} />
            <Link to={'/contacts'}>
                Contacts
            </Link>
            <Line
                sizeId={'desktop'}
                theme={theme.line}
            />
            <Link to={'/faq'}>
                FAQ
            </Link>
        </CWrap>
    )
};

export default NavBar;
