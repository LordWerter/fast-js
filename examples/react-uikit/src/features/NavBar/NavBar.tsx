import { useTheme } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import { CWrap, Line } from './NavBar.styles';

export type IProps = TElementProps & {
    visibility: boolean;
    onClick?: (event: Event)=>any;
};

export const NavBar: React.FC<IProps> = (props): JSX.Element => {
    const visibility = props.visibility;
    //@ts-ignore
    const theme = { ...useTheme().NavBar };
    return (
        <CWrap sizeId={'desktop'} theme={visibility ? theme.cwrap : theme.hidden }>
            <Link to={'/'}>About us</Link>
            <Line sizeId={'desktop'} theme={theme.line} />
            <Link to={'/contacts'}>Page 1</Link>
            <Line sizeId={'desktop'} theme={theme.line} />
            <Link to={'/contacts'}>Page 2</Link>
            <Line sizeId={'desktop'} theme={theme.line} />
            <Link to={'/contacts'}>Page 3</Link>
            <Line sizeId={'desktop'} theme={theme.line} />
            <Link to={'/contacts'}>Contacts</Link>
        </CWrap>
    )
};

export default NavBar;
