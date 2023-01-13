import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [ reverse, setReverse ] = useState(false)
  const [ counter, setCounter ] = useState(0)
  const reverseClass = reverse ? 'reverse' : ''

  const handleReverseLogo = () => {
    setReverse(!reverse)  
  }
  
  const handleCounter = () => {
    setCounter((counter) => counter + 1)  
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className={ `App-logo ${ reverseClass }`} alt="logo" />
        <h1>contador: { counter }</h1>
        <button type='button' onClick={ handleReverseLogo }>
          CLICK INVERT LOGO { reverseClass }
        </button>
        <button type='button' onClick={ handleCounter }>
          CLICK COUNTER { counter }
        </button>
      </header>
    </div>
  );
}

export default App;
