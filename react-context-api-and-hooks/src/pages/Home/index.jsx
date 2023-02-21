import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Heading } from "../../components/Heading"
import { useCounterContext } from "../../contexts/CounterContext"


export const Home = () => {
  const [state, actions] = useCounterContext()
  
  return (
    <div>
      <Heading />
      <Button onButtonClick={() => actions.increase()} children='increase 1'/>
      <Button onButtonClick={() => actions.increase()} children='increase 2'/>
    </div>
  )
}

