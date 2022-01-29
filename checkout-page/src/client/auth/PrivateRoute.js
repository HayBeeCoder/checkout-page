import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }} />
        )
    )} />
}

export default PrivateRoute;