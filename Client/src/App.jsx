import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slidebar from './components/Slidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Slidebar/>
    </>
  )
}

export default App
