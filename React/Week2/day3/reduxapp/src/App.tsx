import React from 'react';
import { BrowserRouter as Router , Route , Routes, Link  } from "react-router-dom";
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Provider } from 'react-redux';
import { store } from  './store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="Home">home </Link>
          <Link to="Contact">contact</Link>
          <Link to="Login">login</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
