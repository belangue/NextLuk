import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');
    };
  return (
    <div className='appcontainer'>
        <div className='logincontainer'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='formgroup'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' 
                    id='username' 
                    name='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                </div>
                <div className='formgroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    id='password' 
                    name='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <button type='submit' className='btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login