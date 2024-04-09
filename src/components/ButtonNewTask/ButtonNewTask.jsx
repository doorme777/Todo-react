import React from "react";
import "./ButtonNewTask.css";
import { TodoContext } from "../TodoContext/TodoContext.jsx";
function NewTask() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <>
      <button className="add-task" onClick={() => setOpenModal((val) => !val)}>
        <i className="fa-solid fa-plus fa-2xl"></i>
      </button>
    </>
  );
}

export { NewTask };
