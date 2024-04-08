import React from 'react';
import Confetti from 'react-confetti';
import { HeaderTodo } from './components/HeaderTodo/HeaderTodo.jsx';
import { TaskComponent } from './components/TasksComponent/TasksComponent.jsx';
import { NewTask } from './components/NewTask/NewTask.jsx';
import { Task } from './components/Task/Task.jsx';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [showConfetti, setShowConfetti] = React.useState(false);

  const completedTasks = todos.filter((task) => !!task.completed).length;
  const totalTasks = todos.length;
  const allTasksCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  React.useEffect(() => {
    if (allTasksCompleted) {
      setShowConfetti(true);
      // const timer = setTimeout(() => setShowConfetti(false), 8000);
      // return () => clearTimeout(timer);
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
      {showConfetti && <Confetti numberOfPieces={1550}  tweenDuration={5000} recycle={false}/>}
      <HeaderTodo
        completed={completedTasks}
        total={totalTasks}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TaskComponent>
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
    </>
  );
}

export default App;
