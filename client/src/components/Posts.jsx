import React, { useState } from 'react'
import NewPost from './NewPost'

export default function Posts() {
  const [postField, setPostField] = useState([])

  const handlePost = post => {
    setPostField(prevPosts => [...prevPosts, post])
  }

  return (
    <div>
      <NewPost
        submitPost={handlePost}
      />
    </div>
  )
}
