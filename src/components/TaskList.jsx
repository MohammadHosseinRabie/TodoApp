import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { Tasks } from './Tasks'

export const TaskList = ({todos, loading, handleCheck, handleDelet}) => {
  
  return (
    <div className="container rounded">
      {loading ? (
        <div className="text-center "><AiOutlineLoading /></div>
      ) : (
        <>
          
          <table className="table table-striped table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Remove</th>
            </tr></thead>
            <tbody>
              <Tasks todos={todos} handleCheck={handleCheck} handleDelet={handleDelet}/>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
