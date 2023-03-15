import './App.css';
import {Person , Country} from './Person';
function App() {
  return (
    <div className="App">
      <Person
        name="Max"
        age={28}
        friends={["max", "Stephanie"]}
        country={Country.USA}
      />
    </div>
  );
}

export default App;
