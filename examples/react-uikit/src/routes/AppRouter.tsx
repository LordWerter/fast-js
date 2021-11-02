import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

const AppRouter: React.FC = (props): JSX.Element => {
    return (
        <>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/contacts' component={Contacts} />
        </>
    );
};

export default AppRouter;
