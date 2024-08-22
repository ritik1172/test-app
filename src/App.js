import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/About" Component={About}></Route>
          <Route path="/Contact" Component={Contact}></Route>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
