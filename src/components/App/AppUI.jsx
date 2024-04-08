import React from 'react';
import Confetti from 'react-confetti';
import { HeaderTodo } from '../HeaderTodo/HeaderTodo.jsx';
import { TaskComponent } from '../TasksComponent/TasksComponent.jsx';
import { NewTask } from '../NewTask/NewTask.jsx';
import { Task } from '../Task/Task.jsx';

function AppUI({
  showConfetti,
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  filteredTasks,
  completeTodo,
  deleteTodo,
}) {
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

export default AppUI;
