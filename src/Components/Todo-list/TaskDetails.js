import React, {memo, useCallback} from 'react';

export default memo(({task, onChange, onDelete}) => {
    console.log('task details');
    const onTaskStatusChange = useCallback(
        (e) => {
            console.log(task);
            task.isCompleted = !task.isCompleted;
            if (onChange) onChange(task);
        },
        [task],
    );

    const onTaskDelete = useCallback(
        (e) => {
            console.log(task);
            if (onDelete) onDelete(task);
        },
        [task],
    );

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
                <button className="btn" onClick={onTaskDelete}>
                    X
                </button>
            </li>
        </>
    );
});
