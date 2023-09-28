import React, { useState, useEffect } from 'react'
import './index.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

const getLocalTodos = () => {
  let localTodos = localStorage.getItem("todos")
  if (localTodos) {
    return JSON.parse(localStorage.getItem("todos"))
  }
  else {
    return []
  }
}

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState(getLocalTodos())

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <header>
        <h1>TODO APP</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App