
import { useParams, useSearchParams } from 'react-router-dom'
import './styles.css'

export const Post = () => {
  const params = useParams()
  const { id } = params
  const [qs] = useSearchParams()

  return (
    <div>
      <h1>Post {`para: ${id}`} {`QS: ${qs}`}</h1>
    </div>
  )
} 