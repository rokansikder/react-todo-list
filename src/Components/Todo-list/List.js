import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../../app/Store/actions';
import TaskDetails from './TaskDetails';

import {
    getAll,
    updateTask,
    deleteTask,
    removeLisnter,
} from '../../app/db/dbHelper';

const List = (props) => {
    const dispatch = useDispatch();
    const action = bindActionCreators(todoActions, dispatch);
    const state = useSelector((_state) => ({
        todoList: _state.list,
    }));
    console.log(props);
    useEffect(() => {
        console.log('0');
        getAll(action.setTodoList);
        return () => {
            removeLisnter();
        };
    }, []);

    useEffect(() => {
        console.log('1');
    });

    useEffect(() => {
        console.log('2');
    });

    useEffect(() => {
        console.log('3');
    });
    const onStatusChange = (task) => {
        updateTask(task);
    };

    const onDeleteTask = (task) => {
        if (window.confirm(`Are you sure want to delete ${task.taskName}?`))
            deleteTask(task);
    };

    if (!state.todoList || state.todoList.length < 1) return <div>No Task</div>;

    return (
        <div id="list">
            <ul>
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
        </div>
    );
};

export default List;
