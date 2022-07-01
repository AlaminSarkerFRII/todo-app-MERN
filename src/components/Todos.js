import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos").then((res) => {
      setTodos(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="">
        {todos.map(todo=>(
            <div key={todo.id} class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body gap-5 flex flex-row justify-center items-center ">
                <h2>{ todo.todo}</h2>
                <p>{todo.date}</p>
                <label htmlFor="complete">
                    
                </label>
                <input id="complete" type="radio" name="radio-1" class="radio" checked />
            </div>
          </div>

        ))}
      
    </div>
  );
};

export default Todos;
