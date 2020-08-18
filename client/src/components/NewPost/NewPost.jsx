import React, { Component } from 'react'
import './NewPost.css'
import Results from '../Results/Results'

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      weight: '',
      reps: '',
      sets: '',
      volume: '',
      oneRepMax: ''
    }
  }
  
  calcVolume() {
    let volume = (this.state.sets * this.state.reps) * this.state.weight
    this.setState({
      volume
    })
  }

  calcOneRepMax() {
    let volume = this.state.weight * this.state.reps
    let maxHelp = (volume * 0.033) + this.state.weight
    let total = parseInt(maxHelp) + parseInt(this.state.weight)
    this.setState({
      oneRepMax: total
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.calcVolume()
    this.calcOneRepMax()
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='calc-div'>
        <form className='form-div' onSubmit={this.handleSubmit}>
          <div className='input-div'>
            <input
            name='weight'
            placeholder='Enter Weight'
            type='text'
            value={this.state.weight}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            name='reps'
            placeholder='Enter Reps'
            type='text'
            value={this.state.reps}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            name='sets'
            placeholder='Enter Sets'
            type='text'
            value={this.state.sets}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
        <div className='component'>
          <Results
            volume={this.state.volume}
            oneRepMax={this.state.oneRepMax}
          />
        </div>
      </div>
    )
  }
}

export default NewPost
