//how to updates store? with help of reducer
const reducer=(store,action)=>{
    // if(action.type==="AD_COUNT"){
    //     return {...store,counter:store.counter+action.payload}
    // }
    // if(action.type==="AD_TODO"){
    //     return {...store,todo:[...store.todo,action.payload]}
    // }
    // return {...store}

    //*****using switch to write the above conditions *******/

    switch(action.type)
    {
        case "AD_COUNT": return {...store,counter:store.counter+action.payload}
        case "AD_TODO":return {...store,todo:[...store.todo,action.payload]}
       default:return store;

    }
}