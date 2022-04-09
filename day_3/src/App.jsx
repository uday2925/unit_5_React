// import logo from './logo.svg';
import './App.css';
import Ofnavbar from './components/category';
import {useState} from 'react'


function App() {

  const datas=[{image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title:"Top Offers"},
                {image:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",title:"Fashion"},
                {image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title:"Top Offers"},
                {image:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",title:"Fashion"}
              ];
              
const [counter,setCounter]=useState(0)

const handlechange=(value)=>{
  setCounter(counter+value);  
}
  return (   
    <div className="App">
      {datas.map((e)=>{        
       return  <Ofnavbar imagea={e.image} titlen={e.title}/>
      })}

      <b>counter:{counter}</b>;
      <hr/>
      <button onClick={()=>{
        handlechange(1);
      }}>ADD 1</button>
      <button onClick={()=>{
        handlechange(-1);
      }}>SUB 1</button>
      
      
    </div>
  );
}

export default App;
