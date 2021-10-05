import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

const AppRouter: FC = ():JSX.Element => {
    return (
        <Switch>
            <Route path='/ '>
                <Welcome />
            </Route>
            <Route path='/contacts'>
                <Contacts />
            </Route>
            <Redirect to='/ ' />
        </Switch>
    );
};

export default AppRouter;
