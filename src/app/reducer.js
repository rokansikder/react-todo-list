import { todoListActionTypes } from "./actionTypes";

const initialState = {
    list:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case todoListActionTypes.GET_TODO_LIST:
            return { ...state, list: action.list };       
        default:
            return state;
    }    
}