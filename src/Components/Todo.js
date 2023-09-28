import React from 'react'
import { MdLibraryAddCheck } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'

const Todo = ({ todo, text, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <>
            <div>
                <li className={todo.completed ? "completed" : ""}>{text}</li>
                <MdLibraryAddCheck onClick={completeHandler} className='completed-btn' />
                <BsFillTrashFill onClick={deleteHandler} className='delete-btn' />
            </div>
        </>
    )
}

export default Todo