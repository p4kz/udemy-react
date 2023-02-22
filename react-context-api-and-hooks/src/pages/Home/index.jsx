import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Heading } from "../../components/Heading"
import { useCounterContext } from "../../contexts/CounterContext"


export const Home = () => {
  const [state, actions] = useCounterContext()
  
  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name,' : ' , e.massge))
  } 

  return (
    <div>
      <Heading />
      <Button onButtonClick={actions.increase} children='increase'/>
      <Button onButtonClick={actions.decrease} children='decrease'/>
      <Button onButtonClick={actions.reset} children='reset'/>
      <Button onButtonClick={() => actions.setCounter({counter: 10})} children='set 10'/>
      <Button onButtonClick={() => actions.setCounter({counter: 100})} children='set 100'/>
      <Button disabled={state.loading} onButtonClick={actions.asyncIncrease} children='Async Increase'/>
      <Button disabled={state.loading} onButtonClick={handleError} children='Async Error'/>
    </div>
  )
}

