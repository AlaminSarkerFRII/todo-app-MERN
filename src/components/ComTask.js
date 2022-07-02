import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {MdDelete} from "react-icons/md"

const ComTask = () => {
    const [todos, setTodos] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get('/complete-todos')
            .then(res => {
                setTodos(res.data)
                setLoading(false)
            })
    }, [loading,setLoading])

    const handleDelete = (event,id)=>{
        event.stopPropagation()
        console.log(event)
        axios.delete(`/todos/${id}`)
        .then(res => {
          console.log(res.data)
          setLoading(true)
        })
      }

    return (
       <>
        {
            todos.map(todo => (
                  <div  key={todo._id} class="card gap-5 my-5 w-96 bg-base-100 shadow-xl">
                    <div class="card-body flex flex-row justify-center items-center">
                    <label htmlFor="complete">
                      </label>
                      <input  id="complete" type="radio" class="radio" checked={todo.isComplete} />
                      <h2>{todo.todo}</h2>
                      <p>{todo.date}</p>
                     <button onClick={(event) =>handleDelete(event,todo._id)}>
                     <MdDelete className="text-xl text-red-700"/>
                     </button>
                    </div>
                  </div>
    
            ))}
       
       </>
    );
};

export default ComTask;