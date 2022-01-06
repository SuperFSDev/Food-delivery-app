import React, { useEffect } from 'react';
import useFirebase from '../../hooks/useFirebase';
import RegFrom from './RegFrom';
import { Redirect, useHistory, useLocation } from 'react-router';
import EmailLogin from './EmailLogin';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { signinUsinggoogle, user, saveUser } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    const handelGooglelogin = () => {
        signinUsinggoogle().then(result => {
            history.push(redirect_uri.pathname);
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
        })
    }
    useEffect(() => {
        if (user.email) {
            history.push('/');
        }
    }, user.email)
    return (
        <div className='container'>
            <div className='row '>

                <div className='col-md-6'>
                    <RegFrom></RegFrom>
                </div>
                <div className='col-md-6'>
                    <EmailLogin></EmailLogin>
                    <button className='btn btn-light' onClick={handelGooglelogin}><small>Log In With</small>  <FcGoogle /></button>


                </div>
            </div>

        </div >
    );
};

export default Login;