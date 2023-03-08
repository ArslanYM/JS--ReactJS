import './App.css';
//importing the custom component
import { User } from './User';
import  {Planets}  from './Planets';
function App() {
  const age = 18;
  const isGreen = true;
  const names = ['John', 'Paul', 'George', 'Ringo'];
  const users = [
    { name: 'John', age: 12 },
    { name: 'Paul', age: 11 },
    { name: 'George', age: 18 },
  ];
  const planets = [
    { name: 'Mercury', isGasPlanet: false },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Mars', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Saturn', isGasPlanet: true },
  ];
  
  return (
    <div style={{ backgroundColor: "whitesmoke" }} className='App'>
      {age > 18 ? <h1>Congrats, you can vote</h1> : <h1>Sorry, you can't vote</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is a text </h1>
      <br></br>
      <h1>Here are the names using map fucntion for array of names</h1>
      {names.map((value, key) => {
        return <h1 key={key}>{value}</h1>;
      })}
      <br></br>
      <h1>Here is when you loop through the users array of objects using map function</h1>
      {users.map((user, key) => {
        return (
          //Using the custom component for displaying the user
          <User
            name={user.name}
            age={user.age}
          />
        );
      })}
      <br></br>
      <h1>Here is when you loop through the planets array of objects using map function</h1>
      {planets.map((planet, key) => {
        return (
          <Planets
            name={planet.name}
            isGasPlanet={planet.isGasPlanet}
          />
        );

      })}
    </div>
  );
}
//Creating a seperate .js file for the component
export default App;
