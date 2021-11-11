import { useTheme } from '@emotion/react'
import React from 'react'
import { CWrap, MenuButtonSticks } from './MenuButton.styles'


interface IProps {
    value?: any;
}

const MenuButton: React.FC<IProps> = (props): JSX.Element => {
    const isHidden = props.value;
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.MenuButton};
    return (
        <CWrap className={isHidden ? 'active' : ''} sizeId={'desktop'} theme={theme.cwrap}>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
            <MenuButtonSticks sizeId={'desktop'} theme={theme.menuButtonSticks}/>
        </CWrap>
    )
}

export default MenuButton;
