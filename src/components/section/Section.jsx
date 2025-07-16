import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import TodoList from "../todoList/TodoList";
const Section = () => {
  // initlisation a state for todo list in this data will get sved and showed from
  const [todoList, setTodoList] = useState([]);

  // this useEffect Will run on mounting or when page is refreshed for getting data from local storage and setting it to todoList state
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Task"));
    if (data !== null) {
      setTodoList(data);
    }
  }, []);

  // This useEffect will run when todoList state hase been changed
  useEffect(() => {
    if (todoList.length !== 0) {
      localStorage.setItem("Task", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <div
      id="section"
      className="w-250 rounded-2xl min-h-4/5 mt-5 p-15 pt-11 flex-col bg-violet-300 m-auto flex items-center "
    >
      <h1 className="font-black text-4xl">
        MyTask - Manage your todos at one place
      </h1>
      <div className="w-full min-h-full mt-7 p-3 ">
        <h2 className="font-bold text-[22px]">Add a Todo</h2>
        {/* passing parent state to child for adding input into state and it will also triger parent rerender */}
        <Input todoList={todoList} setTodoList={setTodoList} />
        <div className="mt-3 flex flex-col h-10 justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="finsihed"
              id="finish"
              className="accent-purple-500/75 "
            />
            <label htmlFor="finish">Show Finished</label>
          </div>
          <hr />
        </div>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default Section;
