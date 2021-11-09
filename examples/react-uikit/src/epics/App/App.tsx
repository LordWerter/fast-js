import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../features/Header';
import AppRouter from '../../routes';

const App: React.FC = (props): JSX.Element => {
    return (
        <Router>
            <Header/>
            <AppRouter />
        </Router>
    );
};

export default App;
