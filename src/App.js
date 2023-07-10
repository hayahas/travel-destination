import logo from './logo.svg';

import Home from './components/home/Home';

import db from './data/db.json';
import './App.css';
import Tours from './components/tours/Tours';

function App() {
  return (
    <div className="App">
 <Home/>
 {
        db.map((obj, i) => (
          <Tours  name={obj.name} image={obj.image} />
        ))
      }
    </div>
  );
}

export default App;
