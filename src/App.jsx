import React from 'react'
import Confetti from 'react-confetti';
import { HeaderTodo } from './components/HeaderTodo/HeaderTodo.jsx';
import { TaskComponent } from './components/TasksComponent/TasksComponent.jsx'
import { NewTask } from './components/NewTask/NewTask.jsx';
import {Task} from './components/Task/Task.jsx'
// const TaskFake = [
//    {text:'Cortar cebolla',completed:true},{text:'Tomar el Curso de Intro a React.js',completed:false},{text:'Llorar con la Llorona',completed:false},{text:'LALALALALA',completed:false}
// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos=[];
  } else { 
    parsedTodos=JSON.parse(localStorageTodos);
  }
  const[todos,setTodos]=React.useState(parsedTodos);
  const[searchValue,setSearchValue]=React.useState('')
  const [showConfetti, setShowConfetti] = React.useState(false);
  const saveTodos=(newTodos)=>{localStorage.setItem('TODOS_V1',
  JSON.stringify(newTodos));
  setTodos(newTodos);}

  const completedTasks = todos.filter((task) => !!task.completed).length;
  const totalTasks = todos.length;
  const allTasksCompleted = todos.length > 0 && todos.every((todo) => todo.completed);
  React.useEffect(() => {
    if (allTasksCompleted) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [allTasksCompleted]);

  const filteredTasks = todos.filter((task) => {
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  })

  const completeTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text==text);
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  };
  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text==text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  return (
    <>
      {showConfetti && <Confetti/>}
      <HeaderTodo 
      completed={completedTasks} 
      total={totalTasks} 
      searchValue={searchValue} 
      setSearchValue={setSearchValue}/>
      <TaskComponent>
        {filteredTasks.map((task) => {
          return <Task 
              key={task.text}
              text={task.text}
              completed={task.completed}
              onComplete={() => completeTodo(task.text)}
              onDelete={() => deleteTodo(task.text)}
              />
          })}
      </TaskComponent>
      <NewTask/>
    </>
  )
}

export default App
