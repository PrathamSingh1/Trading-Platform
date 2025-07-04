import { useState } from 'react'
import HomePage from './landing_page/home/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
