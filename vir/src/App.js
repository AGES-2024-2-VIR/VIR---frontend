import './App.css';
import React from 'react';
import Header from './components/bookshelf/bookshelf';
import BookReader from './components/reader/bookreader';



function App() {
  return (
    <div className="App">
      <Header />  
     

      <BookReader />

      
    </div>
  );
}

export default App;