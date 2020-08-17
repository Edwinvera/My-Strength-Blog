import React from 'react'
import { Link } from 'react-router-dom'
import { destroyMovement } from '../../services/movements'
import './ShowMovements.css'

export default function ShowMovements(props) {

  const handleClick = async (id) => {
    await destroyMovement(id);
    props.setMovements(props.movements.filter((lifts) => {
      return lifts.id !== id
    }))
  }

  return (
    <div className='move-list'>
      <h3>Add Strength Exercise</h3>
      {props.movements.map((lifts) => (
        <div>
          <Link to={`/movements/${lifts.id}`} key={lifts.id}>{lifts.name}</Link>
          <Link to={`/movements/${lifts.id}/edit`}><button>Edit</button></Link>
          <button onClick={() => handleClick(lifts.id)}>Delete</button>
        </div>
      ))}
      <br/>
      <Link to='/movements/new'><button className='create-button'>Create</button></Link>
    </div>
  )
}
