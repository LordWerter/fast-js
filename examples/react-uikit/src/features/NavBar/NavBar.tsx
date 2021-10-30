import React from 'react'
import { Link } from 'react-router-dom';
import { CWrap } from './NavBar.styles';

const NavBar = () => {
    return (
        <CWrap sizeId={'desktop'}>
            <Link to='/ '>Страница приветствия</Link>
            <Link className="contactLink" to='/contacts'>Контакты</Link>
        </CWrap>
    )
}

export default NavBar;
