import logo from './logo.svg';
import './App.css';

import {Navbar} from "./componenets/Navbar"
import {Cartpage} from "./componenets/cartpage"
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Cartpage/>
      
    </div>
  );
}

export default App;
