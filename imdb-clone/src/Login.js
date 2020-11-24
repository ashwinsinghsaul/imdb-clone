import React, { useState } from 'react';
import './Login.css';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} />

                    <h5>Password</h5>
                    <input type="password" value={password} />

                    <button type='submit' className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to IMDb's conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your IMDb Account</button>
            </div>
        </div >
    )
}

export default Login
