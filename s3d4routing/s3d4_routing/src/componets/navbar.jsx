import { Link } from "react-router-dom"

export const Navbar=()=>{

    const nav=[
        {title:"Home", li:"/"},
        {title:"About", li:"/about"},
        {title:"User", li:"/users"},
        
    ]
return(
    <div>
        {nav.map(function(e,i){
        return <Link key={i+100} to={e.li}>{e.title}</Link>
        })} 
    </div>

)



}