import React from "react";

const Card = ({ Task }) => {
  return (
    <div className="h-15 bg-amber-500  flex items-center justify-between p-3 gap-2.5">
      <input type="checkbox" name="" id="" />
      <div className="w-full">
        <label htmlFor="">{Task}</label>
      </div>
      <div className="flex gap-2 bg">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;
