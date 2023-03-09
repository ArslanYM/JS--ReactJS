import { useState, useEffect } from 'react';
import './App.css';
import { Text } from './Text';

function App() {
  const [showText , setShowText] = useState(false);
  useEffect(() => {
    // This is the same as componentDidMount and componentDidUpdate:
    console.log("Component mounted");
    // This is the same as componentWillUnmount:
    return () => {
      console.log("Component unmounted");
    }
  }, [])
  
  return (
    <div className="App">
       <button
       onClick={()=>{setShowText(!showText)}}
       >Show text</button>
        {showText && <Text/>}
    </div>
  );
}

export default App;
