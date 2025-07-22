import React from "react";
import Card from "./card/Card";

const TodoList = ({ todoList, setTodoList, finished }) => {
  const handleClear = () => {
    localStorage.removeItem("Task");
    setTodoList([]);
  };
  return (
    <div className="mt-6">
      <h2 className="font-bold text-[20px] text-gray-800 mb-2 pb-1">
        Your Todos
      </h2>
      <div
        id="todoCard"
        className="w-full flex flex-col gap-3  rounded-xl p-4 shadow-inner  max-h-90 overflow-y-auto"
      >
        {todoList.length > 0 ? (
          todoList.map((data) => (
            <Card
              key={data.id}
              todoData={data}
              setTodoList={setTodoList}
              finished={finished}
            />
          ))
        ) : (
          <p className="text-gray-500 italic text-center">No tasks yet.</p>
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        {todoList.length > 0 ? (
          <button
            className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all w-[80px] h-[40px]"
            onClick={handleClear}
          >
            Clear all
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoList;
