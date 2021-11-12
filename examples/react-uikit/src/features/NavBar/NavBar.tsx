import { useTheme } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import { CWrap } from './NavBar.styles';

export type IProps = TElementProps & React.HTMLAttributes<HTMLDivElement> & {
    visibility: boolean;
};

const NavBar: React.FC<IProps> = (props): JSX.Element => {
    const visibility = props.visibility;
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.NavBar };
    return (
        <CWrap sizeId={'desktop'} theme={visibility ? theme.cwrap : theme.hidden }>
            <div className="separator" />
            <Link to={'/'}>Главная</Link>
            <div className="separator middle" />
            <Link to={'/contacts'}>Контакты</Link>
        </CWrap>
    )
};

export default NavBar;
