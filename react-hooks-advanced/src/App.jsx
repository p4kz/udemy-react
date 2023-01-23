import { useReducer } from 'react';
import './App.css';

export const globalState = {
  title: 'titulo',
  body: 'body context',
  counter: 0,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'muda':
      console.log('muda')
      return { ...state, title: 'Mudou'}
  }
  return {...state}
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState)
  const [counter, title, body] = state 

  return (
    <div>
      <h1>{title} {counter}</h1>
      <button onClick={() => dispatch({ type: 'muda' })}>click</button>
    </div>
  );
}

export default App;
