import { useTheme } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { CWrap } from './NavBar.styles';

const NavBar: React.FC = (props): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.NavBar };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <div className="separator" />
            <Link to={'/'}>Главная</Link>
            <div className="separator middle" />
            <Link to={'/contacts'}>Контакты</Link>
        </CWrap>
    )
};

export default NavBar;
