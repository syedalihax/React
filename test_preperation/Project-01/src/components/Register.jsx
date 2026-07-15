import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

    const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (e) => {
        e.preventDefault()
        console.log({ username, password })
        setUsername('')
        setPassword('')
        navigate('/dashboard')
    }

    return (
        <div>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formHandler}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    required
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register