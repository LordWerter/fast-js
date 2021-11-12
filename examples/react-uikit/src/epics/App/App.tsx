import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TElementProps } from '../../definitions';
import Header from '../../features/Header';
import AppRouter from '../../routes';
import { CWrap } from './App.styles';

export type IProps = TElementProps;

const App: React.FC<IProps> = (props): JSX.Element => {
    return (
        <Router>
            <CWrap sizeId={'desktop'}>
                <Header sizeId={'desktop'}/>
                <AppRouter />
            </CWrap>
        </Router>
    );
};

export default App;
