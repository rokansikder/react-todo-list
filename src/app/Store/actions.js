import {todoListActionTypes} from './actionTypes';

const todoActions = {
    setTodoList: (todoList) => ({ type: todoListActionTypes.SET_TODO_LIST, list:todoList }),
    addTodoItem: task =>({type:todoListActionTypes.ADD_TODO_TASK, task}),
    modifyTodoItem: task =>({type:todoListActionTypes.MODIFY_TODO_TASK, task}),
}
export default todoActions;