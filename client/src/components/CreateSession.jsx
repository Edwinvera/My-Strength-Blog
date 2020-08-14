import React, { useState } from 'react'

export default function CreateSession() {
  const [formData, setFormData] = useState({
    name: ""
  })

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({name: value})
  }

  return (
    <form>
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
