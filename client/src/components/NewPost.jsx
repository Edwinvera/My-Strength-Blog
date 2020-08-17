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
    event.preventDefault();
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
            // onChange={}
          />
          <input
            name='reps'
            placeholder='Enter Reps'
            type='text'
            value={this.state.reps}
            // onChange={}
          />
          <input
            name='sets'
            placeholder='Enter Sets'
            type='text'
            value={this.state.sets}
            // onChange={}
          />
          <button type='submit'>Submit</button>
        </form>
        <div>
          <h2>{this.state.volume}</h2>
          <h2>{this.state.oneRepMex}</h2>
        </div>
      </div>
    )
  }
}

export default NewPost
