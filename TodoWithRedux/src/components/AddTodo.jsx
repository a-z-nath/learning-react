import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice'

function AddTodo({editOn, setEditOn, editTodo}) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    useEffect(()=>{
      editOn? setInput(editTodo.todo): setInput('');
      inputRef.current.focus()
    },[editOn])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if(editOn){
          dispatch(updateTodo({...editTodo, todo: input}))
          setEditOn(false)
        } else {
          dispatch(addTodo(input))
        }
        setInput('')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             className='bg-gray-200 rounded-s-lg px-4 py-2 w-[70%] outline-none'
             name="todo"
             id="todo"
             ref={inputRef}
             placeholder='Enter a Todo' 
             value={input}
             onChange={(e) => setInput(e.target.value)}
            />
            <input
             type="submit"
             className='bg-slate-600 text-gray-300 font-bold py-2 px-4 rounded-e-lg hover:cursor-pointer hover:bg-slate-700'
             value={(!editOn)? "Add Todo": "Update Todo"}
            />
        </form>
    </>
  )
}

export default AddTodo