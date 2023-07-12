import logo from './logo.svg';

import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar' ;

import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' ></Route>
      </Routes>
    </div>
  );
}

export default App;
