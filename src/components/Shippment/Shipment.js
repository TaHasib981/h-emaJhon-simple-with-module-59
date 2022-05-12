import React, { useState } from 'react';
import './Shipment.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [address, setAddress] = useState('')
    const [user] = useAuthState(auth)

    
    const handleNameBlur = (e) =>{
        setName(e.target.value)
        console.log(e.target.value)
    }
    // const handleEmailBlur = (e) =>{
    //     setEmail(e.target.value)
    // onBlur={handleEmailBlur} (this is event handler.. cut and pest)
    // }
    const handlePhoneBlur = (e) =>{
        setPhone(e.target.value)
    }
    const handleAddressBlur = (e) =>{
        setAddress(e.target.value)
    }

    return (
        <div className='login-container'>
        <div className='login-title'>
            <h1>Shipment Information</h1>
        </div>
        <div className='form-container'>
            <div>
                <form >
                    <div className='input-group'>
                        <lebel htmlfor="text">Your Name</lebel><br />
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlfor="email">your email</lebel><br />
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlfor="text">Address</lebel><br />
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlfor="number">Phone Number</lebel><br />
                        <input onBlur={handlePhoneBlur} type="number" name="phon" id="" />
                    </div>
                    <p>{error}</p>
                    <input id='Shipping-button' className='submit-button' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default Shipment;