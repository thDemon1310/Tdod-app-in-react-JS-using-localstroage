import React, { useState } from "react";

const Input = () => {
  const [Todo, setTodo] = useState("");

  const handleInput = (event) => {
    setTodo(event.target.value);
    console.log(Todo);
  };
  return (
    <div className="flex justify-between gap-4 mt-1">
      <input
        type="text"
        name=""
        id=""
        className="border rounded-3xl p-2 w-full text-[20px]"
        placeholder="Enter your Todo here!!"
        onChange={handleInput}
      />
      <button className="border-0 bg-blue-800 text-white p-3 rounded-2xl font-bold">
        ADD
      </button>
    </div>
  );
};

export default Input;
