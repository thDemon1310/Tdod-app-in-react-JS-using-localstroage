import React from "react";
import Input from "../input/Input";
const Section = () => {
  return (
    <div className="w-250 rounded-2xl min-h-4/5 mt-5 p-15 pt-11 flex-col bg-violet-300 m-auto flex items-center ">
      <h1 className="font-black text-4xl">
        MyTask - Manage your todos at one place
      </h1>
      <div className="w-full min-h-full mt-7 p-3 ">
        <h2 className="font-bold text-[22px]">Add a Todo</h2>
        <Input />
      </div>
    </div>
  );
};

export default Section;
