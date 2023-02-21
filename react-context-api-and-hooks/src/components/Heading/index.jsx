import { useCounterContext } from "../../contexts/CounterContext"

export const Heading = () => {
  const [state, actions] = useCounterContext()

  return (
    <h1 style={{ fontSize: '60px', backgroundColor: '#333344', padding: '10px', margin: '10px'}}>
      { state.counter }
    </h1>
  )
}