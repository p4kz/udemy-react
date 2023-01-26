import { useContext, useEffect } from "react"
import { PostsContext } from "../../context/PostsProvider/context"
import { loadPosts } from '../../context/PostsProvider/actions'

export const Posts = () => {
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext
  console.log(postsState)

  useEffect(() => {
    loadPosts(postsDispatch)
  }, [postsDispatch])

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>Carregando posts...</p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}