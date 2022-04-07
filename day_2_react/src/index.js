import "./index.css"
import React from "react";
import ReactDOM from "react-dom";

const root=document.getElementById("root");
// const h1=React.createElement("h1",{"className":"redtxt","id":"uniqueid"},"Hello React!");

// const p=React.createElement("p",{"className":"redtxt","id":"uniqueid"},[h1,h1,h1]);



ReactDOM.render(
    <div>
        <h1>Hellow React</h1>        
    </div>,                   //what to render
    root                //where to render
);