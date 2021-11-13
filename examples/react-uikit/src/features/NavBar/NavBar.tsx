import { useTheme } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import { CWrap, Separator, SeparatorMiddle } from './NavBar.styles';

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
            <Separator sizeId={'desktop'} theme={theme.separator} />
            <Link to={'/'}>Главная</Link>
            <SeparatorMiddle sizeId={'desktop'} theme={theme.separatorMiddle} />
            <Link to={'/contacts'}>Контакты</Link>
        </CWrap>
    )
};

export default NavBar;
