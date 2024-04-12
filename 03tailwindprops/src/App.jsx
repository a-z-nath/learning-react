import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const details_avi = {name: "avizith", title: "debnath"}

  const details_monju = {name: "monjurul", title: "karim"}

  return (
    <>
    <h1 className='bg-green-600 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
    
    <Card details={details_avi} btnText="visit me!"/>
    <Card details={details_monju}/>
    </>
  )
}

export default App
