import { Component, useEffect, useState } from "react"

const s = {
  style: {
    fontSize: '60px'
  }
} 

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);  
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if(counter > 3) {
      throw new Error('que chato')
    }
  },[counter])

  return <div>
    <button onClick={() => setCounter((s) => s + 1)}>
      Click  {counter}
    </button>
  </div>
}

export const Home = () => {
  
  return (
    <>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
    </>
  )
}

