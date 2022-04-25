import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Authcontext } from "../contexts/Auth.context"


export const Login=()=>{

    const {handleAuth}=useContext(Authcontext);
    const navigate=useNavigate();

    return (
        <div>
            <input type="text" placeholder="Enter User name"/>
            <input type="text" placeholder="Enter password" />
            <input type="submit" onClick={()=>{
                handleAuth(true);

                //imperative way
                navigate("/")
            }}/>

        </div>
    )     
}