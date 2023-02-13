import React, { Children, cloneElement, useState } from "react"

const s = {
  style: {
    fontSize: '60px'
  }
} 

const TurnOnOff = ({children}) => {
  const [isON, setIsON] = useState(false)
  const onTurn = () => setIsON(s => !s)

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isON,
      onTurn
    })
    return newChild
  })
}

const TurnedOn = ({isOn, children}) => (isOn ? children : null)
const TurnedOFF = ({isOn, children}) => (isOn ? null : children)

const TurnButton = ({ isON, onTurn, ...props }) => {
  return <button onClick={onTurn}{...props}>turn is {isON ? 'OFF' : 'ON'}</button>
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

