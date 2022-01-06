import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className='container text-center'>
            <Spinner
                className='text-center'
                animation="grow"
            />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;