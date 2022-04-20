
import { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [count,setCount]=useState(0);
    const handlechange=(val)=>{
        setCount(count+val);
    }
    return (
        <CartContext.Provider value={{handlechange,count}}>{children}</CartContext.Provider>
    )
}