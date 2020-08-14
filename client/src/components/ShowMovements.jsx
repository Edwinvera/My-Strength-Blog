import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowMovements(props) {
  return (
    <div>
      <h3>Add Strength Exercise</h3>
      {props.movements.map((lifts) => (
        <Link to={`/movements/${lifts.id}`} key={lifts.id}>{lifts.name}</Link>
      ))}
      <Link to='/movements/new'><button>Create</button></Link>
    </div>
  )
}
