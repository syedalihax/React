import React, { useState, useRef } from 'react'
import List from './components/List'

const App = () => {
    const [text, settext] = useState('')
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const inputRef = useRef(null)
    const addTodo = (e) => {
        e.preventDefault()

        if (text.trim() === "") {
            return alert("input cannot be empty.")
        }
        setTodos([...todos, text])
        settext("")
    }
    const editTodo = (index) => {

        setEditIndex(index)
        settext(todos[index])
        inputRef.current.focus()
    }
    const updateTodo = (e) => {

        e.preventDefault()
        if (text.trim() === "") {
            setEditIndex(null)
            return alert("input should not be empty.")
        }
        setTodos(
            todos.map((todo, currentIndex) => {
                if (currentIndex === editIndex) {
                    return text
                }
                return todo
            })
        )
        settext("")
        setEditIndex(null)
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, currentIndex) => currentIndex !== index))
    }
    return (
        <>
            <form onSubmit={editIndex !== null ? updateTodo : addTodo}>
                <input ref={inputRef} value={text} onChange={(e) => { settext(e.target.value) }} placeholder='title' />
                <button type='submit'>{editIndex !== null ? "Save" : "Add Todo"}</button>
            </form>

            {todos.map((todo, index) => {

                return (
                    <List key={index} index={index} title={todo} onDelete={deleteTodo} onEdit={editTodo} />
                )
            })}
        </>
    )
}

export default App