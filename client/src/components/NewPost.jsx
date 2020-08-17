import React, { Component } from 'react'

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      weight: '',
      reps: '',
      sets: '',
      volume: '',
      oneRepMex: ''
    }
  }
  
  calcVolume() {
    
  }

  calcOneRepMax() {
   
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    this.setState({
      // weight: ,
      // reps: ,
      // sets: ,
    })
  }

  render() {
    return (
      <div className='input-field'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='weight'
            placeholder='Enter Weight'
            type='text'
            value={this.state.weight}
          />
          <input
            name='reps'
            placeholder='Enter Reps'
            type='text'
            value={this.state.reps}
          />
          <input
            name='sets'
            placeholder='Enter Sets'
            type='text'
            value={this.state.sets}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewPost
