import './App.css';
import React from 'react';
import {useCounter} from './counter.js';
function App() {
  const {count, increment, decrement, restart} = useCounter();
  return (
    <div className="App">
    <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={restart}>0</button>
    </div>
  );
}

export default App;
