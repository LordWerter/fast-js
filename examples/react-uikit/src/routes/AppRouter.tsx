import React from 'react';
import { Route } from 'react-router-dom';
import { TElementProps } from '../definitions';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

export type IProps = TElementProps;

const AppRouter: React.FC<IProps> = (props): JSX.Element => {
    return (
        <>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/contacts' component={Contacts} />
        </>
    );
};

export default AppRouter;
