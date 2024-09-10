import './App.css';
import React from 'react';
import Header from './components/bookshelf/bookshelf';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      
      <Outlet />
    </div>
  );
}

export default App;
