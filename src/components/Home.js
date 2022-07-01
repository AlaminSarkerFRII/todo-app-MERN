import React, { useState } from "react";
import AddTodo from "./AddTodo";
import DatePicker from "./DatePicker";
import Todos from "./Todos";

const Home = () => {
  const [date, setDate] = useState("");
  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <DatePicker date={date} setDate={setDate} />
          {!!date && <AddTodo date={date} />}
        </div>
        <div>
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default Home;
