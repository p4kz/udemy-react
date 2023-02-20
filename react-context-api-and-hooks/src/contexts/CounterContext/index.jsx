import { createContext, useContext, useReducer, useRef, useState } from "react";
import { buildActions } from "./build-actions";
import { reducer } from "./reducer";

const Context = createContext()

export const initialState = {
  counter: 0,
  loading: false
}

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useRef(buildActions(dispatch))

  return <Context.Provider value={[state, actions.current]}>{ children }</Context.Provider>
}

export const useCounterContext = () => {
  const context = useContext(Context)

  if(typeof context === 'undefined') {
    throw new Error('you have to use context <CounterContextProvider/> in you index.js')
  }
  return [context[0], context[1]]
}