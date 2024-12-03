import { produce } from 'immer'
import React, { useState } from 'react'

export const FormAddTask = ({task, handleAdd, setTask}) => {
  

  return (
    <>
        <div className="input-group border border-white rounded-3 border-2" >
                <input type="text" className="form-control" placeholder="task..." value={task} onChange={(e) => setTask(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={handleAdd}>add</button>
            </div>
    </>
  )
}
