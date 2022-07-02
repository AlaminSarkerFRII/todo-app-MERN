import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = ({date}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos").then((res) => {
      setTodos(res.data);
      console.log(res.data);
    });
  }, []);

   // completed successfully

    // =========Add to Complete Task========
	const handleComplete = (id) => {
		
        axios.put(`/todos/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        // console.log('submit');
	};


  return (
    <div className="">
        {todos.map(todo=>(
            <div key={todo._id} class="card gap-5 my-5 w-96 bg-base-100 shadow-xl">
            <div class="card-body flex flex-row justify-center items-center ">
                <h2>{ todo.todo}</h2>
                <p>{todo.date}</p>
                <label htmlFor="complete"> 
                </label>
                <input  onClick={()=>{handleComplete(todo._id)}} id="complete" type="radio" name="radio-1" class="radio" checked={todo.isComplete}/>
            </div>
          </div>

        ))}
      
    </div>
  );
};

export default Todos;
