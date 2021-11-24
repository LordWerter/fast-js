import React, { MouseEventHandler } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TElementProps } from '../definitions';
import About from '../epics/About';
import Contacts from '../epics/Contacts';
import FAQ from '../epics/FAQ';
import Gallery from '../epics/Gallery';
import Promo from '../epics/Promo';
import Welcome from '../epics/Welcome';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};

export const AppRouter: React.FC<IProps> = (props): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/promo' component={Promo} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/faq' component={FAQ} />
        </Switch>
    );
};

export default AppRouter;
