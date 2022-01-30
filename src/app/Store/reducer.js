import {todoListActionTypes} from './actionTypes';

const initialState = {
    list: [],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoListActionTypes.SET_TODO_LIST:
            return {...state, list: action.list};
        case todoListActionTypes.MODIFY_TODO_TASK: {
            let _list = state.list.slice(0);
            let _task = _list.find((t) => t.uid === action.task.uid);
            _task = action.task;
            return {...state, list: _list};
        }
        default:
            return state;
    }
};

export default TodoReducer;
