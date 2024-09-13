import './App.css';
import React from 'react';
import Header from './components/bookshelf/bookshelf';
import BookReader from './components/reader/bookreader';
import Navbar from './components/footer-component/footer';
import WithLabelExample from './components/progress-bar/progress';



function App() {
  return (
    <div className="App">
     
      <main>
         
        {/* <WithLabelExample /> */}
          <Navbar></Navbar>

          
      </main>
    </div>
  );



  
}

export default App;