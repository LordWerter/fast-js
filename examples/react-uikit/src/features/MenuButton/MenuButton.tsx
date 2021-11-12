import { useTheme } from '@emotion/react'
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap, MenuButtonSticks } from './MenuButton.styles'

export type IProps = TElementProps & React.HTMLAttributes<HTMLDivElement> & {
    setNavBarVisibility: any;
    navBarVisibility: boolean;
};

const MenuButton: React.FC<IProps> = (props): JSX.Element => {
    const setNavBarVisibility = props.setNavBarVisibility;
    const navBarVisibility = props.navBarVisibility;
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.MenuButton};
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap} onClick={()=>{setNavBarVisibility(!navBarVisibility)}}>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
        </CWrap>
    )
}

export default MenuButton;
