import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  const increment = () => {
    console.log(`counter: ${counter} is incrementing.`);
    // counter += 1;
    // setCounter(counter)
    setCounter(counter+1);
  }

  const decrement = () => {
    console.log(`counter: ${counter} is decrementing.`);
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Code with nath | aznath</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={increment}
      >Increment: {counter}</button>
      <br />
      <button
      onClick={decrement}
      >Decrement: {counter}</button>
    </>
  )
}

export default App
