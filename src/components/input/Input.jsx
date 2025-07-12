import React, { useState, useRef } from "react";

const Input = () => {
  const [Todo, setTodo] = useState("");
  const todoData_Id = useRef(0);
  const handleInput = (event) => {
    setTodo(event.target.value);
  };
  const assId = async () => {
    if (localStorage.length !== 0) {
      return localStorage.length + 1;
    } else {
      return todoData_Id.current + 1;
    }
  };
  const saveLocalStorage = async () => {
    if (Todo !== "") {
      const aboutTodo = {
        task: Todo,
        isDone: false,
        id: await assId(),
      };
      try {
        let Task = `task${aboutTodo.id}`;
        localStorage.setItem(Task, JSON.stringify(aboutTodo));
        console.log(localStorage.getItem(Task));
      } catch (err) {
        console.error(err);
        console.log(`Data not save to loacltorage`);
      }
    } else {
      console.log(`Please enter the input`);
    }
  };
  return (
    <div className="flex justify-between gap-4 mt-1">
      <input
        type="text"
        name="todoInput"
        id=""
        className="border rounded-3xl p-2 w-full text-[20px]"
        placeholder="Enter your Todo here!!"
        onChange={handleInput}
      />
      <button
        className="border-0 bg-blue-800 text-white p-3 rounded-2xl font-bold"
        onClick={saveLocalStorage}
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
