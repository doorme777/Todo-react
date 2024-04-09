import React from "react";
import Confetti from "react-confetti";
import { HeaderTodo } from "../HeaderTodo/HeaderTodo.jsx";
import { TaskComponent } from "../TasksComponent/TasksComponent.jsx";
import { NewTask } from "../ButtonNewTask/ButtonNewTask.jsx";
import { Task } from "../Task/Task.jsx";
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
      <HeaderTodo />
      <TaskComponent>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && totalTasks === 0 && <EmptyTodos />}
        {filteredTasks.map((task) => (
          <Task
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTodo(task.text)}
            onDelete={() => deleteTodo(task.text)}
          />
        ))}
      </TaskComponent>
      <NewTask />
      {openModal && <Modal> <FormNewTask/> </Modal>  }
    </>
  );
}

export default AppUI;
