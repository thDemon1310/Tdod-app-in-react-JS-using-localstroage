import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-15 bg-blue-900 flex items-center p-1 justify-around text-white">
      <div id="logo" className=" font-bold text-3xl">
        MyTask
      </div>
      <nav>
        <ul className="flex gap-10 text-[20px]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">My Tasks</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
