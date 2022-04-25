import logo from './logo.svg';
import './App.css';
import { Navbar } from './componets/navbar';
import {Routes,Route} from "react-router-dom"
import {Home} from "./componets/home"
import {About} from "./componets/about"
import { Users } from './componets/users';
import { Userdetails } from './componets/userdetails';
import { Private } from './componets/private';
import { Login } from './componets/login';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/users"} element={<Users/>}></Route>
        
        <Route path={"/users/:id"} element={<Private><Userdetails/></Private>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>              

      </Routes>


    </div>
  );
}

export default App;
