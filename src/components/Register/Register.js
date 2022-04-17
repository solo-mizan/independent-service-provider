import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <form onSubmit={handleCreateUser} className='w-75 mx-auto border border-2 p-3 rounded-2'>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <p className='text-danger'>{error?.message}</p>
                <input className="btn btn-primary btn-block mt-2" type="submit" value="Register" />
                <p className="forgot-password text-right">
                    Already registerd? <Link className='text-decoration-none text-success' to={'/login'}>Login here</Link>
                </p>
            </form>
            );
        </div>
    );
};

export default Register;