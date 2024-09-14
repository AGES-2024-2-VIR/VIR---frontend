import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/footer-component/footer';



function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      
      <main>
      <Navbar></Navbar>
      </main>
      
    </div>
  )
}

export default App;
