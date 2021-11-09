import React from 'react';
import { Link } from 'react-router-dom';
import { Cwrap } from './NavBar.styles';

const NavBar: React.FC = (props): JSX.Element => {
    return (
        <Cwrap sizeId={'desktop'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/contacts'}>Контакты</Link>
        </Cwrap>
    )
};

export default NavBar;
