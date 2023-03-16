import React from 'react';
import { BrowserRouter as Router , Route , Routes  } from "react-router-dom";
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
