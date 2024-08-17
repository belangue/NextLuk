import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Uusername:', username)
        console.log('Email:', email)
        console.log('Password:', password)
        setUsername('');
        setEmail('');
        setPassword('');
    };
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        background: 'url(https://source.unsplash.com/random/1920*1080) no-repeat center/cover',
        backgroundColor: 'rgba(0, 0, 0, 0.5',
        backdropFilter:'blur(10px)',
    }}
    >
        <div 
        style={{
            backgroundColor:'white',
            padding:'2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            width: '400px'
        }}
        >
            <h2>Sign up</h2>
            <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
            >
                <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                    padding:'0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                />
                <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                    padding:'0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                />
                <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                    padding:'0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                />
                <button
                type='submit'
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4CAF50',
                    color:'white',
                    border:'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
                >
                    Sign up
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup