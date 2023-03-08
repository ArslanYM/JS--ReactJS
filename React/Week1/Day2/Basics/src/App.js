import './App.css';

function App() {
  return (
    <div className='App'>
      <User 
        name='John Doe'
        age='30'
        active={true}
      />
      <User
        name='Jane Doe'
        age='25'
        active={false}
      />
      <User
        name='Joe Doe'
        age='20'
        active={true}
      />
    </div>
  );
}

//Exaple of a component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
        <p>{props.age}</p>
      <p>{props.active? 'Is Active' : 'Not Actived'}</p>
    </div>
  );
  
}

export default App;