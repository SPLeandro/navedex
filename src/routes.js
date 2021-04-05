import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home  from './pages/home';
import Login from './pages/login';
import createNaver from './pages/naverControllers/createNaver.js';
import editNaver from './pages/naverControllers/editNaver.js';
import Header from './Components/Header';

import isAuthenticated from './auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated()? (
            <>
            <Header />
            <Component {...props} />
            </>
        ) : (
            <Redirect to={{pathname:  '/login', state: {from: props.location}}} />
        )

    )} />
)

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exat path="/login" component={Login} />
                <PrivateRoute exact path="/" component= {Home} />   
                <PrivateRoute exat path="/new" component={createNaver} />
                <PrivateRoute exat path="/edit" component={editNaver} />
            </Switch>
        </BrowserRouter>
    )
}