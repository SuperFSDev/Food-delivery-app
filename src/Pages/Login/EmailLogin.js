import React from 'react';
import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import { Redirect, useHistory, useLocation } from 'react-router';
const EmailLogin = () => {
    const { signinwithpassword } = useFirebase();
    const [emails, setemail] = useState([]);
    const [passwords, setpassword] = useState([]);
    const getEmail = (e) => {
        setemail(e.target.value)
    }
    const getpassword = (e) => {
        setpassword(e.target.value)
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    const loginHandeler = () => {
        signinwithpassword(emails, passwords).then(error => {
            history.push(redirect_uri.pathname);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
    return (
        <div>
            <div className='login-header'><h3 className='my-2'>Sign In </h3></div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control onBlur={getEmail} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control onBlur={getpassword} type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="success" className='my-2' onClick={loginHandeler}>Sign in</Button>
        </div>
    );
};

export default EmailLogin;