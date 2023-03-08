
import './styles.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/posts'>posts</Link></li>
        <li><Link to='/post/10'>posts 10</Link></li>
        <li><Link to='/redirect'>Redirect</Link></li>
      </ul>
    </nav>
  )
} 