import { useDebugValue, useEffect, useState } from 'react'
import './styles.css'

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(false)

  useDebugValue(`query : ${queryValue}`)

  useEffect(() => {
    let isMounted = true
    const matchMedia = window.matchMedia(queryValue)

    const handleChange = () => {
      if(!isMounted) return
      setMatch(!!matchMedia.matches)
    }

    matchMedia.addEventListener('change', handleChange)

    setMatch(!!matchMedia.matches)

    return () => {
      isMounted = false
      matchMedia.removeEventListener('change', handleChange)
    }

  }, [queryValue])

  return match
} 

export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)')
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)')
  const small = useMediaQuery('(max-width: 967px) and (min-width: 321px)')
  const background = huge ? 'green' : big ? 'red' : small ? 'yeallow': null

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: background }}>oi</h1>
      </div>
    </>
  )
}

export default Home;
