import React, { useState } from 'react'
import { postMovement } from '../services/movements';

export default function CreateSession(props) {
  const [formData, setFormData] = useState({
    name: ""
  })

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({name: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMovement = await postMovement(formData)
    props.setFoods([
      ...props.movements,
      newMovement
    ])
    props.history.push('/movements')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Movement</h3>
      <input
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
