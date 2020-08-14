import React, { useState, useEffect } from 'react'
import { readOneMovement } from '../services/movements'

export default function MovementDetail(props) {
  const [movementDetail, setMovementDetail] = useState(null)

  useEffect(() => {
    getMovementDetail()
  }, [])

  const getMovementDetail = async () => {
    const movementDetail = await readOneMovement(props.match.params.id)
    setMovementDetail(movementDetail)
  }

  return (
    <div>
      {
        movementDetail && (
        <>
          <h3>{movementDetail.name}</h3>
          {movementDetail.muscles.map((muscle) => (
            <p key={muscle.id}>{muscle.name}: {muscle.note}</p>
          ))}
        </>
        )
      }
      
    </div>
  )
}
