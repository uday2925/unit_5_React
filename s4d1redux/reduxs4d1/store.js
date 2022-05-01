//importing to create store

import { legacy_createStore as createStore } from "redux";

 
const initState={
    counter:0,
    todo:[23]
}

///store created with imported 
const store=createStore(reducer,initState);

console.log("initinal store",store.getState())

store.dispatch({type:"AD_COUNT",payload:1})
console.log("AFTER DISPATCH",store.getState())

store.dispatch({type:"AD_TODO",payload:1})
console.log("AFTER DISPATCH TODO",store.getState())