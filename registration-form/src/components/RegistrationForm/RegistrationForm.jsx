import React, { useState } from 'react';

export default function RegistrationForm({ handleRegistration }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            fullName,
            email,
            password
        }
        handleRegistration(newUser)
        setFullName('')
        setEmail('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign <span>Up</span></h1>
            <div>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    required
                    placeholder={"\u00A0"}
                    minLength={6}
                    maxLength={22}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <label htmlFor="fullName">Enter Name</label>
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    value={email}
                    required
                    placeholder={"\u00A0"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Enter Email</label>
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    value={password}
                    required
                    placeholder={"\u00A0"}
                    minLength={8}
                    maxLength={26}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Enter Password</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}
