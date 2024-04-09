import React from "react";
import { TodoProvider, TodoContext } from "../TodoContext/TodoContext.jsx";
import "./HeaderTodo.css";

function HeaderTodo() {
  const { totalTasks, completedTasks } = React.useContext(TodoContext);

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <>
      <div role="header" className="background background-top">
        <h1>
          Tareas terminadas <span>{completedTasks}</span> de{" "}
          <span>{totalTasks}</span>
        </h1>
        <input
          type="search"
          name=""
          id=""
          placeholder="Cubrir a Juan..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export { HeaderTodo };
