import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { useLocalStorage } from './useLocalStorage.jsx';
import './index.css';

function Main() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [showConfetti, setShowConfetti] = React.useState(false);

  const completedTasks = todos.filter((task) => !!task.completed).length;
  const totalTasks = todos.length;
  const allTasksCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  React.useEffect(() => {
    if (allTasksCompleted) {
      setShowConfetti(true);
    }
  }, [allTasksCompleted]);

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
    <>
      <App 
        showConfetti={showConfetti}
        completedTasks={completedTasks}
        totalTasks={totalTasks}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredTasks={filteredTasks}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
