import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";



export const Userdetails=()=>{

    const {id}=useParams();  
    
    const [inddata,setInddata]=useState([]);

useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{//in data object we are taking only key value pair with key data
       
    setInddata(data.data);
   
    }
)},[id])




        return(
            <div>
                <p>Id:no:{id}</p>
                <p>First Name:{inddata.first_name}</p>
                <p>Lat Name:{inddata.last_name}</p>
                <p><img src={inddata.avatar} alt="img" /></p>
            </div>
        )
}