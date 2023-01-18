import './App.css';

import { useEffect, useMemo, useState } from 'react'

const Post = ({ post }) => {
  console.log('renderizou post')
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  console.log('renderizou')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r))
  }, [])

  return (
    <div>
      <input 
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
                <Post key={post.id} post={post}></Post>
              )
            })
          )
        }, [posts])
      }
    </div>
  );
}

export default App;
