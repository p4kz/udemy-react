import { createContext, useReducer } from 'react';
import P from 'prop-types'
import './App.css';
import { useContext } from 'react';

//action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE' 
}

//data
export const globalState = {
  title: 'titulo',
  body: 'body context',
  counter: 0,
}

//reducer
export const reducer = (state, action) => {
  switch(action.type) {
    case actions.CHANGE_TITLE: {
      console.log('mudar title')
      return {...state, title : 'qualquer coisa'}
    }
  }
  return {...state}
}

//appcontext
export const Context = createContext()

export const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, globalState)

  const changeTitle = () => {
    dispatch({ type: actions.CHANGE_TITLE })
  }

  return (
    <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>
  )
}

export const H1 = () => {
  const context = useContext(Context)
  return (
    <h1 onClick={() => context.changeTitle()}>
      {context.state.title}
    </h1>
  )
}



AppContext.protoType = {
  children: P.node
}

function App() {
  return (
    <AppContext>
      <H1></H1>
    </AppContext>
  );
}

export default App;
