import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    if(user){
        navigate('/shop')
    }
    const handleEmailBlur = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePasswordBlur = (e) =>{
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = (e) =>{
        setConfirmPassword(e.target.value)
    }

    const handleCreateUser = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setError('your two password did not macth')
            return
        }
        if(password.length <6){
            setError('password minimum 6 cheracter')
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='login-title'>
                <h1>Sign-Up</h1>
            </div>
            <div className='form-container'>
                <div>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <lebel htmlfor="email">email</lebel><br />
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <lebel htmlfor="password">password</lebel><br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <lebel htmlfor="password">confirm-password</lebel><br />
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p>{error}</p>
                        <input className='submit-button' type="submit" value="Submit" />
                    </form>
                    <p className='signup-link'>
                        Already have an account? <Link to="/login">Login</Link>
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

export default Signup;