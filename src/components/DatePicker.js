import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const DatePicker = ({date,setDate}) => {

//   const navigate = useNavigate();

//   const handleNavigate = ()=>{
//     navigate("/addTodo")

//   }

  return (
    <div className="flex ml-5 justify-start items-center my-16">
      <div>
        <h2 className="text-xl my-6 ">
          Selected date to add todo :
          <span className="text-orange-500 px-3 font-bold">{date}</span>{" "}
        </h2>
        <input
          className="input"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {/* <div className="px-10">
      <button onClick={()=>handleNavigate()} class="btn btn-warning">Add Todo</button>
      </div> */}
    </div>
  );
};

export default DatePicker;
