import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  // Confetti component
  const [showConfetti, setShowConfetti] = React.useState(true);
  const allTasksCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  React.useEffect(() => {
    if (allTasksCompleted) {
      setShowConfetti(true);
    }
  }, [allTasksCompleted]);

  const completedTasks = todos.filter((task) => !!task.completed).length;
  const totalTasks = todos.length;
  const filteredTasks = todos.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        showConfetti,
        setShowConfetti,
        filteredTasks,
        searchValue,
        setSearchValue,
        completedTasks,
        totalTasks,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
