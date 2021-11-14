import { useTheme } from '@emotion/react'
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap, Line } from './MenuBtn.styles'

export type IProps = TElementProps & React.HTMLAttributes<HTMLDivElement> & {
    setNavBarVisibility: any;
    navBarVisibility: boolean;
};

export const MenuBtn: React.FC<IProps> = (props): JSX.Element => {
    const {navBarVisibility, setNavBarVisibility} = props;
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.MenuButton};
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap} onClick={()=>{setNavBarVisibility(!navBarVisibility)}}>
            <Line sizeId={'desktop'} theme={theme.line}/>
            <Line sizeId={'desktop'} theme={theme.line}/>
            <Line sizeId={'desktop'} theme={theme.line}/>
        </CWrap>
    )
}

export default MenuBtn;
