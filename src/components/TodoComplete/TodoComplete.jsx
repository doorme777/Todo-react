import React, { Children } from "react";
import { TodoContext } from "../TodoContext/TodoContext.jsx";
import "./TodoComplete.css";

function TodoComplete({ Children }) {
  const { totalTasks, completedTasks } = React.useContext(TodoContext);

  return (
    <>
      <div role="header" className="background background-top">
        <h1>
          Tareas terminadas <span>{completedTasks}</span> de{" "}
          <span>{totalTasks}</span>
        </h1>
        {Children}
      </div>
    </>
  );
}

export { TodoComplete };
