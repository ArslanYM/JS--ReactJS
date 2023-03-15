import './App.css';
import {Person } from './Person';
function App() {
  return (
    <div className="App">
      <Person
        name="Max"
        age={28}
        friends={["Manu", "Stephanie"]}
      />
    </div>
  );
}

export default App;
