
import './App.css';
import {useState} from "react";
import { Button } from './components/Button';


function App() {
  const [counter,setCounter]=useState(0);
  return (
    <div className="App">
      counter:{counter}
      <Button onClick={()=>{setCounter(counter+1)}}>ADD1</Button>
      <Button onClick={()=>{setCounter(counter-1)}}>SUB1</Button>
    </div>
  );
}

export default App;
// import "./button.css"
import styled from "styled-components"
// export const Button = ({children, onClick})=>{
//     return (
//         <button className="button-32" onClick={onClick}>{children}</button>
//     )
// }


// import "./button.css"
// import styled from "styled-components"
// export const Button = ({children, onClick})=>{
//     return (
//         <button className="button-32" onClick={onClick}>{children}</button>
//     )
// }