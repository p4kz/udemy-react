
import './styles.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
      </ul>
    </nav>
  )
} 