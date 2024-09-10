import './App.css';
import React from 'react';
import Header from './components/bookshelf/bookshelf';
import BookReader from './components/reader/bookreader';
import Navbar from './components/footer-component/footer';



function App() {
  return (
    <div className="App">
     
      <main>
         
          <Navbar></Navbar>
      </main>
    </div>
  );



  
}

export default App;