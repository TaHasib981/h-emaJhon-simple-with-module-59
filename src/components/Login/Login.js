import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    if(user){
        navigate (from, {replace:true})
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const createUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='login-title'>
                <h1>Login</h1>
            </div>
            <div className='form-container'>
                <div>
                    <form onSubmit={createUser}>
                        <div className='input-group'>
                            <lebel htmlfor="email">email</lebel><br />
                            <input onBlur={handleEmailInput} type="email" name="email" id="" />
                        </div>
                        <div className="input-group">
                            <lebel htmlfor="password">password</lebel><br />
                            <input onBlur={handlePassword} type="password" name="password" id="" />
                        </div>
                        <p>{error?.message}</p>
                        {
                            loading && <p>loading...</p>
                        }
                        <input className='submit-button' type="submit" value="Login" />
                    </form>
                    <p className='signup-link'>
                        new to Ema-John? <Link to="/signup">Create an account</Link>
                    </p>
                    <div className='or-main-container'>
                        <div className='or-container'>
                            <div className='desh'></div>
                            <div className='or-div'>or</div>
                            <div className='desh'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;