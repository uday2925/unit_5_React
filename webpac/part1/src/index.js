import "./index.css";

function sum(a,b)
{
    return a+b;
}
console.log(sum(1,5));

const root=document.getElementById("root");
const h1=document.createElement("h1");
h1.innerText="hello world";
h1.setAttribute("class","redtxt");

root.appendChild(h1);