import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async (event) => {
        const getEmail = (event.target.value);
        await sendPasswordResetEmail(getEmail);
        toast('Email sent')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-75 mx-auto border border-2 p-3 w-75 mx-auto rounded-2'>
            <h2 className='text-danger text-center mt-3'>Please Login</h2>
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text-danger'>{error?.message}</p>
                </Form.Group>
                <p className='align-items-center d-flex'>Forgot your password?<button onClick={resetPassword} className='text-success btn btn-link'>Reset password here</button></p>
                <input className='btn btn-primary mb-2 w-50 mx-auto d-block' type="submit" value="Login" />
                <p>Don't have an Account? <Link className='text-success' to={'/register'}>Register here</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;