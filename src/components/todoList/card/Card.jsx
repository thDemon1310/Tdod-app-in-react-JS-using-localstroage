import React, { useState, useEffect, useRef } from "react";
import Input from "../../input/Input";

const Card = ({ todoData, setTodoList, finished }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todoData.task);
  const inputRef = useRef(null);

  const [check, setCheck] = useState(todoData.isDone);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus(); // A ref might not yet be attached to a DOM element (e.g., before the component mounts).
    }
  }, [isEditing]);

  const handleEditSave = () => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        if (item.id === todoData.id) {
          return { ...item, task: editValue };
        } else {
          return item;
        }
      });
    });
    setIsEditing(false);
  };

  const handleCheckBox = (event) => {
    setCheck(event.target.checked);
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === todoData.id ? { ...item, isDone: !check } : item
      )
    );
  };

  const handleDelete = async () => {
    const data = await JSON.parse(localStorage.getItem("Task"));
    if (data.length == 1) {
      localStorage.removeItem("Task");
    } else {
      setTodoList((prevState) =>
        prevState.filter((item) => item.id !== todoData.id)
      );
    }
  };

  return (
    <div
      className={
        todoData.isDone
          ? finished
            ? "min-h-16 bg-blue-700 rounded-xl shadow-md flex items-center justify-between px-4 py-2 gap-4 transition-all hover:shadow-lg"
            : "min-h-16 bg-blue-700 rounded-xl shadow-md flex items-center justify-between px-4 py-2 gap-4 transition-all hover:shadow-lg invisible"
          : "min-h-16 bg-blue-700 rounded-xl shadow-md flex items-center justify-between px-4 py-2 gap-4 transition-all hover:shadow-lg "
      }
    >
      <input
        type="checkbox"
        className="accent-purple-600 scale-125 cursor-pointer"
        checked={check}
        onChange={handleCheckBox}
      />

      <div className="w-full">
        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            value={editValue}
            className="w-full text-black p-1 rounded-md bg-emerald-50"
            onChange={(event) => {
              setEditValue(event.target.value);
            }}
          />
        ) : (
          <h3
            className={
              check
                ? "line-through text-lg font-medium text-yellow-400"
                : "text-lg font-medium text-white"
            }
          >
            {todoData.task}
          </h3>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="bg-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all"
            onClick={handleEditSave}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-purple-800 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
