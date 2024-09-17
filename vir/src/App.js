import React from 'react';
import './App.css';
import BookCard from './components/bookcard/bookcard';
import BookShelf from './components/bookshelf/bookshelf';

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <BookCard />
        <BookCard />
      </main>
    </div>
  );
}

export default App;