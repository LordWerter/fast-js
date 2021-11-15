import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TElementProps } from '../definitions';
import Contacts from '../epics/Contacts';
import Welcome from '../epics/Welcome';

export type IProps = TElementProps;

export const AppRouter: React.FC<IProps> = (props): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
    );
};

export default AppRouter;
