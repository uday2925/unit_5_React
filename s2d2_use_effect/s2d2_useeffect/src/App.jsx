import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  
  
  useEffect(()=>{
    async function getdata(){
      const data=await fetch("http://localhost:8080/comments").then((d)=>d.json());
      console.log(data);
      setTodos(data);      
            }
  getdata();
    // async ()=>{
    //   const data=await fetch("http://localhost:8080/comments").then((d)=>d.json());
    //   console.log(data);
    //   setTodos(data);
  },[]) //empty array:call only once


  // const data=await fetch("http://localhost:8080/comments").then((d)=>d.json());
  // console.log(data);
  // setTodos(data);
  return (
    <div className="App">
      {todos.map((e)=>{
        return <p>{e.id}.{e.body}</p>
      })}      
    </div>
  )
}

export default App
