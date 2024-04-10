import React from "react";
import Confetti from "react-confetti";
import { TodoComplete } from "../TodoComplete/TodoComplete.jsx";
import { TodoSearch } from "../TodoSearch/TodoSearch.jsx";
import { TodoComponentForm } from "../TodoComponentForm/TodoComponentForm.jsx";
import { NewTask } from "../ButtonNewTask/ButtonNewTask.jsx";
import { Todo } from "../Todo/Todo.jsx";
import { TodoLoading } from "../TodoLoading/TodoLoading.jsx";
import { TodoError } from "../TodoError/TodoError.jsx";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { FormNewTask } from "../FormNewTask/FormNewTask.jsx";
import { TodoContext } from "../TodoContext/TodoContext.jsx";

function AppUI() {
  const {
    loading,
    error,
    showConfetti,
    filteredTasks,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  const totalTasks = filteredTasks.length;

  return (
    <>
      {showConfetti && (
        <Confetti numberOfPieces={1550} tweenDuration={5000} recycle={false} />
      )}

      <TodoComplete>
        <TodoSearch />
      </TodoComplete>

      <TodoComponentForm>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && totalTasks === 0 && <EmptyTodos />}
        {filteredTasks.map((task) => (
          <Todo
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTodo(task.text)}
            onDelete={() => deleteTodo(task.text)}
          />
        ))}
      </TodoComponentForm>
      <NewTask />
      {openModal && (
        <Modal>
          {" "}
          <FormNewTask />{" "}
        </Modal>
      )}
    </>
  );
}

export default AppUI;
