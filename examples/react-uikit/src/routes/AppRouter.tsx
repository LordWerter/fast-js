import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

const AppRouter: FC = ():JSX.Element => {
    return (
        <Switch>
            <Route exact path='/ ' component={Welcome}/>
            <Route exact path='/contacts' component={Contacts}/>
        </Switch>
    );
};

export default AppRouter;
