import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdDelete} from "react-icons/md"

const Todos = ({ date, loading, setLoading }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos").then((res) => {
      setTodos(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }, [loading, setLoading]);


  // =========Add to Complete Task========
  const handleComplete = (id) => {
    axios.put(`/todos/${id}`)
      .then(res => {
        console.log(res.data)
        setLoading(true)
      })
    // console.log('submit');
  };

  const handleDelete = (event,id)=>{
    event.stopPropagation()
    // console.log(event)
    axios.delete(`/todos/${id}`)
    .then(res => {
      console.log(res.data)
      setLoading(true)
    })
  }
  return (
    <div className="">
      {
        todos.map(todo => (
          <>
            {todo.isComplete === false && (
              <div  key={todo._id} class="card gap-5 my-5 w-96 bg-base-100 shadow-xl">
                <div class="card-body flex flex-row justify-center items-center">
                <label htmlFor="complete">
                  </label>
                  <input onClick={() => { handleComplete(todo._id) }} id="complete" type="radio" class="radio" checked={todo.isComplete} />
                  <h2>{todo.todo}</h2>
                  <p>{todo.date}</p>
                 <button onClick={(event) =>handleDelete(event,todo._id)}>
                 <MdDelete className="text-xl text-red-700"/>
                 </button>
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default Todos;
