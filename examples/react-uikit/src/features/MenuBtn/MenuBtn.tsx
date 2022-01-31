import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react';
import { useTypedSelector } from '../../assets/hooks';
import { useActions } from '../../assets/hooks/useActions';
import { TElementProps } from '../../definitions';
import { CWrap, Line } from './MenuBtn.styles'

export type IProps = TElementProps & {
    onClick?: MouseEventHandler<HTMLDivElement>;
};

export const MenuBtn: React.FC<IProps> = (props): JSX.Element => {
    const navbarVisibility = useTypedSelector(state => state.navbarVisibility);
    const { hideNavbar, displayNavbar } = useActions();

    const setNavbarVisibility = (visibility: boolean) => {
        visibility ? hideNavbar() : displayNavbar();
    };
    //@ts-ignore
    const theme = { ...useTheme().MenuBtn };
    return (
        <CWrap sizeId={'desktop'} theme={navbarVisibility.visibility ? theme.active : theme.nonActive} onClick={() => setNavbarVisibility(navbarVisibility.visibility)} >
            <Line sizeId={'desktop'} theme={theme.line} />
            <Line sizeId={'desktop'} theme={theme.line} />
            <Line sizeId={'desktop'} theme={theme.line} />
        </CWrap>
    )
}

export default MenuBtn;
