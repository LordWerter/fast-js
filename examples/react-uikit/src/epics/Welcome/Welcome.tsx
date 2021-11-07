import { useTheme } from '@emotion/react';
import React from 'react'
import Content from '../../features/Content';
import Header from '../../features/Header';
import { CWrap } from './Welcome.styles'

const Welcome: React.FC = (props): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = { ...fullTheme.Welcome };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Header />
            <Content />
        </CWrap >
    );
};

export default Welcome;
