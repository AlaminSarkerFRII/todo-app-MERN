import axios from 'axios';
import React, { useState } from 'react';

const AddTodo = ({date}) => {
    const [todo,setTodo] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!todo.length){
            return alert("Please select a task")
        }
        axios.post("/todos",{
            todo,isComplete:false,
            date ,
        })
        .then(res=>{
            console.log(res.data)
        })
        console.log('submit');
    }


   

    return (
        <div className='px-20 py-28'>
            <form onSubmit={handleSubmit}>
            <h2 className="text-xl">Add Todo Here</h2>
            <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} placeholder="Add Todo" class="input input-bordered input-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddTodo;