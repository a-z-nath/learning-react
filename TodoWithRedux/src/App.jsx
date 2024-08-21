import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'


function App() {
  const [editOn, setEditOn] = useState(null)
  const [editTodo, setEditTodo] = useState({});
  
  return (
    <>
      <h1 className='text-xl font-bold'>Todo App with react-redux.</h1>
      <AddTodo {...{editOn, setEditOn, editTodo}}/>
      <Todos {...{editOn, setEditOn, setEditTodo}}/>
    </>
  )
}

export default App
