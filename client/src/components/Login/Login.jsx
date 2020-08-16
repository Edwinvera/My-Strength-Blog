import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../services/auth';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
    const userData = await loginUser(formData);
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  

  return (
      <form className='login-form' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>
          Username:
          <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          />
        </label>
        <label>
          Password: 
          <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
        </label>
        <button className='login-button'>Submit</button>
        <Link className='register-link' style={{textDecoration: "none"}} to="/register">Start Strong! Register Here</Link>
      </form>
  )
}
