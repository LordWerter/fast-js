import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CWrap } from './App.styles'
import AppRouter from '../../routes';
import Header from '../../features/Header';

const App: React.FC = (): JSX.Element => {
    return (
        <Router>
            <CWrap>
                <Header/>
            </CWrap>
            <AppRouter />
        </Router>
    );
};

export default App;
