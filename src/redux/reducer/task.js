import { ADD_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK } from "../action/actionType"

const initialState = {}

export const addTaskReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TASK:
            return {
                task: action.payload
            }
        case UPDATE_TASK:
            return{
                task: action.payload
            }    
        case DELETE_TASK:
            return{
                task: action.payload
            }    
        default:
            return state    
    }
}

export const getTaskReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_TASK:
            return{
                task: action.payload
            }
        default:
            return state    
    }
}