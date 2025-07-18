import React, { useState, useEffect, useRef } from "react";
import Input from "../../input/Input";

const Card = ({ todoData, setTodoList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todoData.task);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus(); // A ref might not yet be attached to a DOM element (e.g., before the component mounts).
    }
  }, [isEditing]);

  const handleEditSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-16 bg-blue-700 rounded-xl shadow-md flex items-center justify-between px-4 py-2 gap-4 transition-all hover:shadow-lg">
      <input
        type="checkbox"
        name="done"
        className="accent-purple-600 scale-125 cursor-pointer"
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
          <h3 className="text-lg font-medium text-white cursor-pointer">
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

        <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
