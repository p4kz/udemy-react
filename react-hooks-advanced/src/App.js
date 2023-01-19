import './App.css';

import { useEffect, useMemo, useRef, useState } from 'react'

const Post = ({ post, handleClick }) => {
  console.log('renderizou post')
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)} >{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  const input = useRef(null)

  console.log('renderizou')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.json())
    .then((r) => setPosts(r))
  }, [])

  useEffect(() => {
    input.current.focus()
  }, [value])
  
  const handleClick = (value) => {
    setValue(value)
  }

  return (
    <div>
      <input 
        ref={input}
        type='search' 
        value={value} 
        onChange={(e) => {
          setValue(e.target.value)
        }}>
      </input>
      {
        useMemo(() => {
          return (
            posts.length > 0 && posts.map((post) => {
              return (
                <Post key={post.id} post={post} handleClick={handleClick} />
              )
            })
          )
        }, [posts])
      }
    </div>
  );
}

export default App;
