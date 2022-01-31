import './List.scss';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../../app/Store/actions';
import TaskDetails from './TaskDetails';

import {
    getAll,
    updateTask,
    deleteTask,
    saveTask,
    removeLisnter,
} from '../../app/db/dbHelper';
import Todo from './ToDo';

const List = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators(todoActions, dispatch);
    const state = useSelector((_state) => ({
        todoList: _state.list,
    }));

    const [showAddNew, setAddNewFlag] = useState(false);

    useEffect(() => {
        getAll(action.setTodoList);
        return () => {
            removeLisnter();
        };
    }, []);

    const onStatusChange = (task) => {
        updateTask(task);
    };

    const toggleAddNew = (e) => {
        setAddNewFlag(!showAddNew);
    };

    const addNewTask = (task) => {
        saveTask(task);
        setAddNewFlag(!showAddNew);
    };

    const onDeleteTask = (task) => {
        if (window.confirm(`Are you sure want to delete ${task.taskName}?`))
            deleteTask(task);
    };

    const noTaskMessage = 'No Task';
    if (!state.todoList) return <div>{noTaskMessage} </div>;

    return (
        <div id="todo-list">
            <div id="list">
                <ul>
                    {state.todoList.length < 1 && <li>{noTaskMessage}</li>}
                    {state.todoList &&
                        state.todoList
                            .filter((t) => !t.isCompleted)
                            .map((task, i) => (
                                <TaskDetails
                                    key={i}
                                    task={task}
                                    onChange={onStatusChange}
                                    onDelete={onDeleteTask}
                                />
                            ))}
                    {state.todoList &&
                        state.todoList
                            .filter((t) => t.isCompleted)
                            .map((task, i) => (
                                <TaskDetails
                                    key={i}
                                    task={task}
                                    onChange={onStatusChange}
                                    onDelete={onDeleteTask}
                                />
                            ))}
                </ul>
                {showAddNew && (
                    <Todo
                        show={showAddNew}
                        toggle={toggleAddNew}
                        onSave={addNewTask}
                    />
                )}
            </div>
            <div className="bottom-section">
                <button className="add-new" onClick={toggleAddNew}>
                    +
                </button>
            </div>
        </div>
    );
};

export default List;
