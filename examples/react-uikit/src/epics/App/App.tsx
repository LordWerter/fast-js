import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Global } from '@emotion/react'
import { CWrap, reset } from './App.styles'
import AppRouter from '../../routes';
import Header from '../../features/Header';

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Global styles={reset} />
            <CWrap>
                <Header/>
            </CWrap>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
