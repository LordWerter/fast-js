import { useTheme } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import { CWrap, Line } from './NavBar.styles';

export type IProps = TElementProps & {
    visibility: boolean;
    onClick?: (event: Event)=>any;
};

const NavBar: React.FC<IProps> = (props): JSX.Element => {
    const visibility = props.visibility;
    //@ts-ignore
    const theme = { ...useTheme().NavBar };
    return (
        <CWrap sizeId={'desktop'} theme={visibility ? theme.cwrap : theme.hidden }>
            <Link to={'/'}>Главная</Link>
            <Line sizeId={'desktop'} theme={theme.line} />
            <Link to={'/contacts'}>Контакты</Link>
        </CWrap>
    )
};

export default NavBar;
