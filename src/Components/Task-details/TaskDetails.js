import React, {useCallback} from 'react';

export default ({task, onChange})=>{    
console.log('task details');
    const onTaskStatusChange= useCallback(e=>{
        console.log(task);
        if(onChange) onChange(task);
    },[task]);

    return (<>
        <li> <label><input type="checkbox" checked={task.isCompleted} onChange={onTaskStatusChange}></input>  {task.name}</label></li>
    </>);
}