
import { useLocation } from 'react-router-dom';
import './styles.css'

export const About = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>{state}</p>
    </div>
  )
} 