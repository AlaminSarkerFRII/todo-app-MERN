import React, { useState } from "react";
import AddTodo from "./AddTodo";
import DatePicker from "./DatePicker";
import Todos from "./Todos";

const Home = () => {
  const [date, setDate] = useState("");
  const [loading,setLoading] = useState(true);
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <DatePicker date={date} setDate={setDate} />
          {!!date && <AddTodo date={date} loading={loading} setLoading={setLoading} />}
        </div>
        <div>
          <Todos loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
