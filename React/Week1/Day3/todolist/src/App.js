import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setToDoList([...toDoList, task]);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
 // if the task id matches the id of the task that was clicked on, then it will change the completed value to true
  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  //filters out the task that was clicked on if the task name matches the task name in the array
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
          return <Task
            id={task.id}
            taskName={task.taskName}
            deleteTask={deleteTask}
            completed = {task.completed}
            completeTask = {completeTask}
          />
        })}
      </div>
    </div >
  );
}

export default App;