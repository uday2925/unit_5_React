

//ACTION TYPES
export const ADD_COUNT="ADD_COUNT";


//ACTION CREATORS

export const action=(data)=>{
    return {
        type:ADD_COUNT,
        payload:data
    }
}