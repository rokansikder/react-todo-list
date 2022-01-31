import {todoListActionTypes} from './actionTypes';

const initialState = {
    list: [],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoListActionTypes.SET_TODO_LIST:
            return {...state, list: action.list};
        case todoListActionTypes.MODIFY_TODO_TASK: {
            return {
                ...state,
                list: Object.assign(
                    state.list[
                        state.list.findIndex((el) => el.uid === action.task.uid)
                    ],
                    action.task,
                ),
            };
        }
        default:
            return state;
    }
};

export default TodoReducer;
