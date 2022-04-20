import {CartContext} from "../contexts/CartContext";
import { useContext } from "react";

export const Navbar=()=>{
    const {count}=useContext(CartContext);

    return <nav style={{border:"1px solid red"}}>cart:{count}</nav>
}