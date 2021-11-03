import { useTheme } from '@emotion/react'
import React from 'react'
import { CWrap, MenuButtonSticks } from './MenuButton.styles'

const MenuButton: React.FC = (props): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.MenuButton};
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
        </CWrap>
    )
}

export default MenuButton;
