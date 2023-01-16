import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('executa toda vez que o componente atualiza')
  })

  // executa uma vez
  useEffect(() => {
    console.log('executa uma vez')
  }, [])

  // executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('executa toda vez que a dependencia mudar ', 'c1:', counter, 'c2:', counter2)
  }, [counter, counter2])

  return (
    <div className="App">
      <h1>Contador1: {counter}</h1>
      <h1>Contador2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
