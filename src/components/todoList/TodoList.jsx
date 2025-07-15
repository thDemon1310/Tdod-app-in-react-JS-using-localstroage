import React from "react";
import Card from "./card/Card";

const TodoList = ({ Tododata }) => {
  return (
    <div>
      <h2 className="font-bold text-[19px] cursor-pointer">Your Todos</h2>

      <div id="todoCard" className="w-full flex flex-col flex-wrap gap-2 mt-2">
        {Tododata.map((data) => (
          <Card key={data.id} Task={data.task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
