import './App.css';
import { useState } from 'react';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const newToDoList = [...toDoList , newTask];
    setToDoList(newToDoList);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='list'>
       {toDoList.map((task)=>{
          return( 
          <div>
            <input type='checkbox' />
            <h1>{task}</h1>
          </div>);
       }) }
      </div>
    </div>
  );
}

export default App;
