import React, { useState, useRef, useEffect } from "react";

const Input = () => {
  const [inputData, setInputData] = useState("");

  const todoId = useRef(0);

  const [Todo, setTodo] = useState({
    id: Number,
    task: String,
    isDone: Boolean,
  });

  useEffect(() => {
    const key = `Task${Todo.id}`;
    const value = JSON.stringify(Todo);
    localStorage.setItem(key, value);
  }, [Todo]);

  const handleClick = async () => {
    if (inputData !== "" && inputData !== null) {
      setTodo({
        id: await handleTodoId(),
        task: inputData,
        isDone: false,
      });
    } else {
      alert(`Please enter you TODO`);
    }
  };

  const handleTodoId = async () => {
    const arrData = handleRefreshError();
    todoId.current = arrData.length + 1;
    return todoId.current;
  };

  const handleRefreshError = () => {
    const localLength = localStorage.length;
    const arr = [];
    for (let i = 1; i <= localLength; i++) {
      let key = `Task${i}`;
      let localValue = localStorage.getItem(key);
      if (localValue == null || localValue == "") {
        break;
      } else {
        arr.push(localValue);
      }
    }
    return arr;
  };

  return (
    <div className="flex justify-between gap-4 mt-1">
      <input
        type="text"
        name="todoInput"
        id=""
        value={inputData}
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
