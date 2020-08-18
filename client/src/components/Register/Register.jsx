import React, { useState } from 'react'
import { registerUser } from '../../services/auth';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const userData = await registerUser(formData);
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h3>Register</h3>
          <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          />
          <br/>
          <input
          type="text"
          name="email"
          placeholder="name@email.com"
          value={formData.email}
          onChange={handleChange}
          />
          <br/>    
          <input
          type="password"
          name="password"
          placeholder="Password (6 characters minimum)"
          value={formData.password}
          onChange={handleChange}
          />
          <br/>
      <button>Submit</button>
    </form>
  )
}