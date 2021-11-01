import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom'
=======
>>>>>>> fdad0dec813f09da87602b204229fa0b8e173636
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
