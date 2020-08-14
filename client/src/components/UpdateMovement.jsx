import React, { useState, useEffect } from 'react'
import { putMovement } from '../services/movements'

export default function UpdateMovement(props) {
    const [formData, setFormData] = useState({
      name: ""
    })
  
  useEffect(() => {
    defaultFormData()
    }, [props.movements])
  
  const defaultFormData = () => {
    const lifts = props.movements.find((movement) => {
      return movement.id === parseInt(props.match.params.id)
    })
    if (lifts) {
      setFormData({ name: lifts.name })
    }
  }
  
    const handleChange = (event) => {
      const { value } = event.target;
      setFormData({name: value})
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { id } = props.match.params;
      const newMovement = await putMovement(id, formData)
      props.setMovements(
        props.movements.map((lifts) => {
          return lifts.id === parseInt(id) ? newMovement : lifts
        })
      )
      props.history.push('/movements')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Edit Movement</h3>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
