import React from "react";
import "./FormNewTask.css";
import { TodoContext } from "../TodoContext/TodoContext.jsx";
function FormNewTask(params) {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <section className="modal-form">
      <div className="title">
        <h2>Agrega una nueva tarea.</h2>
      </div>
      <form className="form-task" onSubmit={onSubmit}>
        <textarea
          name="text-new-task"
          id=""
          cols="30"
          rows="10"
          placeholder="Escribe tu tarea aquí..."
          onChange={onChange}
        ></textarea>
        <input
          type="submit"
          value="Agregar"
          onClick={() => {
            onSubmit();
            setOpenModal((set) => !set);
          }}
        />
      </form>
    </section>
  );
}

export { FormNewTask };
