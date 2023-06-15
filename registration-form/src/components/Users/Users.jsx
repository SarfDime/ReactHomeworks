import React from 'react'

export default function Users({ registeredUsers, handleRemoveUsers, handleRemoveUser }) {
    return (
        <div className='usersContainer'>
            <h2>Registered <span>Users</span></h2>
            {registeredUsers.length === 0 ? (
                <p className='noUsers'>No users registered</p>
            ) : (
                <ul>
                    {registeredUsers.map((user, index) => (
                        <li key={index}>
                            {user.fullName}
                            <button onClick={() => handleRemoveUser(index)}>
                                <svg viewBox="0 0 48 48">
                                    <path d="M 24 4 C 20.704135 4 18 6.7041348 18 10 L 7.5 10 A 1.50015 1.50015 0 1 0 7.5 13 L 10 13 L 10 38.5 C 10 41.533 12.467 44 15.5 44 L 32.5 44 C 35.533 44 38 41.533 38 38.5 L 38 13 L 40.5 13 A 1.50015 1.50015 0 1 0 40.5 10 L 30 10 C 30 6.7041348 27.295865 4 24 4 z M 24 7 C 25.674135 7 27 8.3258652 27 10 L 21 10 C 21 8.3258652 22.325865 7 24 7 z M 19.5 18 C 20.328 18 21 18.672 21 19.5 L 21 34.5 C 21 35.328 20.328 36 19.5 36 C 18.672 36 18 35.328 18 34.5 L 18 19.5 C 18 18.672 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.672 30 19.5 L 30 34.5 C 30 35.328 29.328 36 28.5 36 C 27.672 36 27 35.328 27 34.5 L 27 19.5 C 27 18.672 27.672 18 28.5 18 z" />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleRemoveUsers}>Clear Users</button>
        </div>
    )
}

