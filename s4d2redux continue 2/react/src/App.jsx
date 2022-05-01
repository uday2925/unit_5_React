import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { counterstore } from './Redux/store'
import { action } from './Redux/action'
import {useDispatch,useSelector} from "react-redux"

function App() {
   
  const dispatch=useDispatch();

  const store=counterstore.getState();
  const counter=useSelector((store)=>store.counter)
  console.log(store);
  return (
    <div className="App">
      <p>counter:{counter}</p>
      <button onClick={()=>{
        // counterstore.dispatch(action(1));
        dispatch(action(1))
      }}>add 1</button>
    </div>
  )
}

export default App
