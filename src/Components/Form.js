import React from 'react'
import './Components.css'
import { MdAddBox } from 'react-icons/md'

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, id: Math.random() * 1000, completed: false }])
        setInputText("")
    }
    return (
        <>
            <form>
                <input type="text" placeholder="Add Todo" value={inputText} onChange={inputTextHandler} />
                <MdAddBox className='add-todo-btn' onClick={submitTodoHandler} />
            </form>
        </>
    )
}

export default Form