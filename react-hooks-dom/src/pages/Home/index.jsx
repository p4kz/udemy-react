import React, { createContext, useContext, useState } from "react"

const s = {
  style: {
    fontSize: '60px'
  }
}

const TurnOnOffContext = createContext()

const TurnOnOff = ({children}) => {
  const [isOn, setIsOn] = useState(false)
  const onTurn = () => setIsOn((s) => !s)

  return <TurnOnOffContext.Provider value={{isOn, onTurn}}>{children}</TurnOnOffContext.Provider>
}

const TurnedOn = ({children}) => {
  const { isOn } = useContext(TurnOnOffContext)

  return (isOn ? children : null)
}

const TurnedOFF = ({children}) => {
  const { isOn } = useContext(TurnOnOffContext)
  return (isOn ? null : children)
}

const TurnButton = ({...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext)
  return <button onClick={onTurn}{...props}>turn is {isOn ? 'OFF' : 'ON'}</button>
}

export const Home = () => {
  
  return (
    <TurnOnOff>
      <TurnedOn>ON</TurnedOn>
      <TurnedOFF>OFF</TurnedOFF>
      <TurnButton {...s}/> 
    </TurnOnOff>
  )
}

