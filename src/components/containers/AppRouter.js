import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import Home from './Home';
import Dashboard from './Dashboard';

 class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/dashboard' component={Dashboard} exact={true} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
