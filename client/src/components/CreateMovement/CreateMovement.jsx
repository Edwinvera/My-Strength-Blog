import React, { useState } from 'react'
import { postMovement } from '../../services/movements';
import './CreateMovement.css'

export default function CreateMovement(props) {
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
    props.setMovements([
      ...props.movements,
      newMovement
    ])
    props.history.push('/movements')
  }

  return (
    <div className='form-div'>
      <form className='create-move' onSubmit={handleSubmit}>
        <h3>Create Movement</h3>
          <div>
            <input
              className= 'input'
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <button>Submit</button>
          </div>
      </form>
    </div>
  )
}
