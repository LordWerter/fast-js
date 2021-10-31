import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

const AppRouter: React.FC = ():JSX.Element => {
    return (
        <Switch>
            <Route exact path='/ ' component={Welcome}/>
            <Route exact path='/contacts' component={Contacts}/>
        </Switch>
    );
};

export default AppRouter;
