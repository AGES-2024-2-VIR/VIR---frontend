import './App.css';
import { Outlet } from 'react-router-dom';
import BookCard from './components/bookcard/bookcard';



function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BookCard/>
    </div>
  )
}

export default App;
