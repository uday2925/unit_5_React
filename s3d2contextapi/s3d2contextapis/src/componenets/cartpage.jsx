import {CartContext} from "../contexts/CartContext";
import { useContext } from "react";


export const Cartpage=()=>{
    const {handlechange}=useContext(CartContext);
    return (
        <div>
            <button onClick={()=>{
                handlechange(1);
            }}>Add to cart</button>
        </div>
    )
}