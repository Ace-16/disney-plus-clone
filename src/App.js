import React from 'react';
// import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
