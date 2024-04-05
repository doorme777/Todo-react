import React from 'react'
import { HeaderTodo } from './components/HeaderTodo/HeaderTodo.jsx';
import { TaskComponent } from './components/TasksComponent/TasksComponent.jsx'
import { NewTask } from './components/NewTask/NewTask.jsx';
import {Task} from './components/Task/Task.jsx'
const TaskFake = [
  {text:'Cortar cebolla',completed:true},{text:'Tomar el Curso de Intro a React.js',completed:false},{text:'Llorar con la Llorona',completed:false},{text:'LALALALALA',completed:false}
]

function App() {
  return (
    <>
      <HeaderTodo completed={12} total={23}/>
      <TaskComponent>
        {TaskFake.map((task) => {
          return <Task 
              key={task.text}
              text={task.text}
              completed={task.completed}/>
          })}
      </TaskComponent>
      <NewTask/>
    </>
  )
}

export default App
