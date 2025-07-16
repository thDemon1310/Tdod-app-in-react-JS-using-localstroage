import React, { useState, useRef, useEffect } from "react";

const Input = () => {
  const [inputData, setInputData] = useState("");

  const todoId = useRef(0);

  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    const key = `Task`;
    let arr = JSON.parse(localStorage.getItem(key));
    if (arr !== null) {
      setTodo(arr);
    }
  }, []);

  useEffect(() => {
    if (Todo.length !== 0) {
      const key = `Task`;
      const value = JSON.stringify(Todo);
      localStorage.setItem(key, value);
    }
  }, [Todo]);

  const handleClick = async () => {
    if (inputData !== "" && inputData !== null) {
      try {
        await handleTodoId();
        const setData = {
          id: todoId.current,
          task: inputData,
          isDone: false,
        };
        setTodo([...Todo, setData]);
        setInputData(""); // clear input
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(`Please enter you TODO`);
    }
  };

  const handleTodoId = async () => {
    const key = `Task`;
    let arr = await JSON.parse(localStorage.getItem(key));
    if (arr !== null) {
      todoId.current = arr.length + 1;
    } else {
      todoId.current = todoId.current + 1;
    }
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
