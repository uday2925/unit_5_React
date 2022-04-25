import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Authcontext } from "../contexts/Auth.context"



export const Private=({children})=>{
    
    const {isAuth}=useContext(Authcontext)
    if(isAuth){
       return <Navigate to={"/login"}/>//declarative way
       //will navigate to loginpage automatically
    }
    return children

    
}