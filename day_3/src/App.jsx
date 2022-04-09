import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //ser+name to chanhe
  const [counter,setCounter]=useState(0); 

  return (   
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button onClick={()=>{
        setCounter(15);
      }}></button>
    </div>
  );
}

export default App;
