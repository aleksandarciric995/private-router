import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  
  }

  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to='login'>Login</Link>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Profile />
          </PrivateRoute> } />
          <Route path='/settings' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Settings />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login onHandleLogin={handleLogIn}/>} />
          <Route path="/" element={<Home />} /> 
          {/* KADA GOD PRAVIMO RUTE, STAVLJAMO HOME NA KRAJ */}
          {/* kada nema stranice, stavljamo * */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
