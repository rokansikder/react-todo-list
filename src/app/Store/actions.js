import {todoListActionTypes} from './actionTypes';

const todoActions = {
    setTodoList: () => ({ type: todoListActionTypes.GET_TODO_LIST }),
    addTodoItem: task =>({type:todoListActionTypes.ADD_TODO_TASK, task}),
    modifyTodoItem: task =>({type:todoListActionTypes.MODIFY_TODO_TASK, task}),
}
export default todoActions;