import './App.css';
import React, { useState, useEffect, useCallback } from 'react'

const Button = React.memo(({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>
})

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter(counter + num)
  }, [counter])

  return (
    <div className="App">
      <h1>Contador1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
