import React from 'react'
import './Results.css'

export default function Results(props) {

  return (
    <div className='results-div'>
      <div>
        <h1>Results</h1>
      </div>
      <div>
        <h2>Total Volume</h2>
        <p>{props.volume} lbs</p>
      </div>
      <div>
        <h2>One Rep Max</h2>
        <p>{props.oneRepMax} lbs</p>
      </div>
    </div>
  )
}
