import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export const Tasks = ({todos, handleCheck, handleDelet}) => {
  return (
    <>
       {todos.map(todo => (
                <tr key={todo.id}>
                  <td><input className="form-check-input" type="checkbox" id={todo.id} checked={todo.completed} onChange={() => handleCheck(todo.id)}/></td>
                  <td><label className={todo.completed ? "" : "text-secondary text-decoration-line-through fs-6"} htmlFor={todo.id}>{todo.title}</label></td>
                  {todo.completed ? (<td className="fs-6">done!</td>) : (<td className="fs-6">in progress</td>)}
                  <td><button className="btn btn-danger" onClick={() => handleDelet(todo.id)}><MdDeleteForever /></button> </td>
                </tr>
              ))}
    </>
  )
}
