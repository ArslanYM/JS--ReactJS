import './App.css';
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import { Navbar } from "./Navbar";

function App() {
  return (
     <div className="App">
     <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>  
     </Router>
    </div>
  );
}

export default App;
