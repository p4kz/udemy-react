import React, { Suspense, useState } from "react"
// import LazyComponent from "../lazy.component"



const LazyComponent = React.lazy(() => import('../lazy.component'))

export const Home = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => {setShow((s) => !s)}}>show {show ? 'on': 'off'}</button>
      <Suspense fallback={<p>loading...</p>}>
        {show && <LazyComponent />} 
      </Suspense>
    </div>
  )
}

