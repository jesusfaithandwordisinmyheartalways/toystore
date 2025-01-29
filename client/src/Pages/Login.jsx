


import React from 'react'
import '../Pages/CSS/Login/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const userSubmit = async (event) => {
        event.preventDefault();
    }


  return (
    <>

<div className={'login-container'}>

<div className={'login-wrapper'} >

<form onSubmit={userSubmit} className="Subscribe-Form" id="subscribe-form">
       <h1>User Login</h1>
       {errorMessage && <div>{errorMessage}</div>}
     {successMessage && <div>{successMessage}</div>}
<div>
<label htmlFor="username">Username</label>
</div>
<div>
<input
onChange={(e) => setUsername(e.target.value)}
type="text"
value={username}
placeholder="Username"
required
/>
</div>
<div>
<label htmlFor="password">Password</label>
</div>
<div>
<input
onChange={(e) => setPassword(e.target.value)}
type="password"
value={password}
placeholder="Password"
required
/>
</div>
<div>
<label htmlFor="confirm-password">Confirm Password</label>
</div>
<div>
<input
onChange={(e) => setConfirmPassword(e.target.value)}
type="password"
value={confirmPassword}
placeholder="Confirm Password"
required
/>
</div>
<div>
<label htmlFor="email">Email</label>
</div>
<div>
<input
onChange={(e) => setEmail(e.target.value)}
type="email"
value={email}
placeholder="Email"
required
/>
</div>
<div>
<button type="submit">Sign Up</button>
</div>
</form>




</div>



</div>




  </>


  )
}

export default Login
