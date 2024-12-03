import React, { useEffect, useState } from 'react'
import { FormAddTask } from './FormAddTask'
import { TaskList } from './TaskList'
import { produce } from 'immer'
import { Navbar } from './Navbar'

export const Header = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState("")
  
  useEffect(() => {
    setLoading(true)
    fetch("data/data.json")
      .then(res => res.json())
      .then(json => setTodos(json))
      .finally(() => {
        setLoading(false)
      })
      
  }, [])
  const handleDelet = (id) => {
    setTodos(produce(todos,(draft)=>{
      const index = draft.findIndex(todo => todo.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
    }
    }))
  }
  
  const handleCheck = (id) => {
    setTodos(produce(todos,(draft)=>{
      const todo = draft.find(todo => todo.id===id);
      if(todo){
        todo.completed = !todo.completed
      }
    }))
  }
  const handleAdd = (e) => {
    e.preventDefault();
    const lastTaskId = todos[todos.length -1].id
    if(task.trim()){
      setTodos(produce(todos,(draft)=>{
        draft.push({id:lastTaskId +1,title:task,completed:false})
      }));
      setTask("");
    }
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar/>
        <div className="row align-items-center justify-content-center">
            <div className="col-12 py-5 align-items-center justify-content-center d-flex">
                <h3>To Do App</h3>
            </div>
            <div className="col-6 align-items-center justify-content-center mb-3">
              <FormAddTask task={task} handleAdd={handleAdd} setTask={setTask}/>
            </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12">
              <TaskList todos={todos} loading={loading} handleCheck={handleCheck} handleDelet={handleDelet}/>
          </div>
        </div>
      </div>  
    </>
  )
}
