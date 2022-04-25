import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export const Users=()=>{
const [users,setUsers]=useState([]);

useEffect(()=>{
    axios.get("https://reqres.in/api/users").then(({data})=>{//in data object we are taking only key value pair with key data
       
    setUsers(data.data);
    console.log({users}) 
    }
)},[])

return(
    <div>
        {users.map((e,i)=>{
           return <p key={i+0.36985421}><Link to={`/users/${e.id}`}>{e.id}.{e.first_name}</Link></p>
        })}
    </div>
)


}