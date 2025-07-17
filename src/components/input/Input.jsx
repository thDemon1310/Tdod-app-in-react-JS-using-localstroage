import React, { useState } from "react";

const Input = ({ todoList, setTodoList }) => {
  // this state will handle input
  const [InputData, setInputData] = useState("");

  const handleClick = async () => {
    // is some one passed single space it will not get saved to state
    const task = InputData.trim();
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    const newTodo = {
      id: todoList.length + 1,
      task: InputData,
      isDone: false,
    };
    console.log(newTodo);
    setTodoList([...todoList, newTodo]);
    setInputData("");
  };
  return (
    <div className="flex justify-between gap-4 mt-1">
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        value={InputData}
        className="border rounded-3xl p-2 w-full text-[20px]"
        placeholder="Enter your Todo here!!"
        onChange={(event) => {
          setInputData(event.target.value);
        }}
      />
      <button
        className="border-0 bg-blue-800 text-white p-3 rounded-2xl font-bold"
        onClick={handleClick}
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
