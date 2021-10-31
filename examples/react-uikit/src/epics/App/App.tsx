import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global } from '@emotion/react'
import { CWrap, reset } from './App.styles'
import AppRouter from '../../routes';
import Header from '../../features/Header';

const App: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Global styles={reset} />
            <CWrap>
                <Header/>
            </CWrap>
            <AppRouter />
        </Router>
    );
};

export default App;
