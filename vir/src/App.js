import './App.css';
import React from 'react';
// import Header from './components/bookshelf/bookshelf';
// import BookReader from './components/reader/bookreader';
// import Navbar from './components/footer-component/footer';
// import WithLabelExample from './components/progress-bar/progress';
import List from './components/generic-list/generic-list';



function App() {

  const listItems = [
    {
      title: 'Item 1',
      description: 'This is the description for item 1.',
      image: 'https://via.placeholder.com/100',
      buttons: [
        { label: 'Button 1', onClick: () => alert('Button 1 clicked!') },
        { label: 'Button 2', onClick: () => alert('Button 2 clicked!') },
      ],
      showDescription: true,
    },
    {
      title: 'Item 2',
      image: 'https://via.placeholder.com/100',
      buttons: [
        { label: 'Button 3', onClick: () => alert('Button 3 clicked!') },
      ],
      showDescription: false, // No description shown
    },
    {
      title: 'Item 3',
      description: 'This item has no buttons.',
      image: 'https://via.placeholder.com/100',
      buttons: [], // No buttons
      showDescription: true,
    },
  ];


  return (
    <div className="App">
     
      <main>
        <List items={listItems}/>
          
      </main>
    </div>
  );
  
}

export default App;