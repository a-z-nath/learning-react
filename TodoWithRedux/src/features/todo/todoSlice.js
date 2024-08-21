import { createSlice, nanoid } from "@reduxjs/toolkit";


const todos = localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [];

const initialState = {
    todos
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('addTodo\n' + action.payload);
            
            const todo = {
                id: nanoid(),
                todo: action.payload,
            }
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            console.log('removeTodo\n' + action.payload);
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            console.log('updateTodo\n' + action.payload);
            state.todos = state.todos.map(todo => (todo.id === action.payload.id)? todo = action.payload: todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions


export default todoSlice.reducer