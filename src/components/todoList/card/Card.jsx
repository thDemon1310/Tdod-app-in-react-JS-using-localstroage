import React from "react";

const Card = ({ Task }) => {
  const handleEdit = () => {
    const Input = document.getElementById("todoInput");
    Input.focus();
  };
  return (
    <div className="min-h-16 bg-blue-700 rounded-xl shadow-md flex items-center justify-between px-4 py-2 gap-4 transition-all hover:shadow-lg">
      <input
        type="checkbox"
        name="done"
        className="accent-purple-600 scale-125 cursor-pointer"
      />

      <div className="w-full">
        <label className="text-lg font-medium text-white cursor-pointer">
          {Task}
        </label>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-purple-800 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
