import { useCounterContext } from "../../contexts/CounterContext"

export const Button = ({ children, onButtonClick }) => {
  const [state, actions] = useCounterContext()

  return (
    <button
      style={{ color: 'black', fontSize: '35px', margin: '10px', padding: '5px'}}
      onClick={ onButtonClick }
    >
      { children }
    </button>
  )
}