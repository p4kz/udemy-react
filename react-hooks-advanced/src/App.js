import './App.css';
import React, { useContext, useState } from 'react'

const globalState = {
  title: 'titulo',
  body: 'body context',
  counter: 0,
}

const GlobalContext = React.createContext()


const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  )
}

const H1 = () => {
  const theContext = useContext(GlobalContext)
  const { contextState } = theContext
  return (
    <h1>{contextState.body}</h1>
  )
}

const P = () => {
  const theContext = useContext(GlobalContext)
  return (
    <p>{theContext.body}</p>
  )
}

function App() {
  const [contextState, setContextState] = useState(globalState)

  return (
    <GlobalContext.Provider 
      value={{ contextState, setContextState }}
    >
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
