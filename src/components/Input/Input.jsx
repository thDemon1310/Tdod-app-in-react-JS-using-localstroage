import React, { useState } from "react";

const Input = () => {
  const [todoList, setTodoList] = useState("");

  const handleChange = (event) => {
    setTodoList(event.target.value);
  };
  return (
    <div>
      <input type="text" value={todoList} onChange={handleChange} placeholder="What would you like to do?"/>
      <div className="line"></div>
      <button>Add</button>
    </div>
  );
};

export default Input;
