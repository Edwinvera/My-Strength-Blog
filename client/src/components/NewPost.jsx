import React, { useState } from 'react'

export default function NewPost(props) {
  const [inputTitle, setTitle] = useState('')
  const [inputReport, setReport] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitPost(
      {
        id: Math.floor(Math.random() * 1000),
        title: inputTitle,
        report: inputReport
      }
    )
    setTitle('');
    setReport('');
  }

  return (
    <div className='input-field'>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          placeholder='Title'
          type='text'
          value={inputTitle}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />
        <input
          name='report'
          placeholder='Report'
          type='text'
          value={inputReport}
          onChange={event => {
            setReport(event.target.value);
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
