import { useTheme } from '@emotion/react';
import React from 'react';
import { TElementProps } from '../../definitions';
import Footer from '../../features/Footer';
import Header from '../../features/Header';
import AppRouter from '../../routes';
import { CWrap } from './App.styles';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = { ...useTheme().App };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Header sizeId={'desktop'} />
            <AppRouter sizeId={'desktop'} />
            <Footer sizeId={'desktop'} />
        </CWrap>
    );
};

export default App;
