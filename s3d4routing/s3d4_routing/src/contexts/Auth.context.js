import {createContext, useState } from "react";

export const Authcontext=createContext();

export const AuthcontextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(true);
    
    const handleAuth=(state)=>{
    setIsAuth(state);
    }

    return <Authcontext.Provider value={{isAuth,handleAuth}}>{children}</Authcontext.Provider>


}