import React, { useState } from 'react'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Users from './components/Users/Users'
import './App.scss'

export default function App() {
  const [registeredUsers, setRegisteredUsers] = useState([{
    fullName: 'tempOne',
    email: 'tempOne@gmail.com',
    password: 'tempOne@gmail.com'
  }, {
    fullName: 'tempTwo',
    email: 'tempOne@gmail.com',
    password: 'tempOne@gmail.com'
  }, {
    fullName: 'tempThree',
    email: 'tempOne@gmail.com',
    password: 'tempOne@gmail.com'
  }, {
    fullName: 'tempFour',
    email: 'tempOne@gmail.com',
    password: 'tempOne@gmail.com'
  }
  ])

  const handleRegistration = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser])
  }

  const handleRemoveUsers = () => {
    setRegisteredUsers([])
  }

  const handleRemoveUser = (index) => {
    const updatedUsers = [...registeredUsers]
    updatedUsers.splice(index, 1)
    setRegisteredUsers(updatedUsers)
  }

  return (
    <main>
      <RegistrationForm handleRegistration={handleRegistration} />
      <Users registeredUsers={registeredUsers} handleRemoveUsers={handleRemoveUsers} handleRemoveUser={handleRemoveUser} />
    </main>
  )
}



