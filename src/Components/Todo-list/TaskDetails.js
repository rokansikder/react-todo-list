import React from 'react';

const TaskDetails = ({task, onChange, onDelete}) => {
    const onTaskStatusChange = (e) => {
        task.isCompleted = !task.isCompleted;
        if (onChange) onChange(task);
    };

    const onTaskDelete = (e) => {
        if (onDelete) onDelete(task);
    };

    if (!task) return null;
    return (
        <>
            <li className="task-details">
                <label className={task.isCompleted ? 'complete' : ''}>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={onTaskStatusChange}></input>

                    {task.taskName}
                </label>
                <button onClick={onTaskDelete}>X</button>
            </li>
        </>
    );
};

export default TaskDetails;
