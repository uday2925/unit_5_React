import { counterreducer } from "./reducer.js";
import {legacy_createStore as createStore} from "redux";

export const counterstore=createStore(counterreducer,{counter:0});


// counterstore.subscribe(()=>{

//     console.log("subcribe",counterstore.getState());

// })


//middlewares

const middleware1=(store)=>(next)=>(action)=>{
    console.log("Entering m1");
    next(action)
    console.log("exit mw1")
}

const middleware2=(store)=>(next)=>(action)=>{
    console.log("Entering m2");
    next(action)
    console.log("exit mw2")
}

export const store=createStore(rootReducer,applyMiddleware(middleware1,middleware2))