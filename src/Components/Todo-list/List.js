import './List.scss';
import React, { useState, useLayoutEffect } from 'react';
import TaskDetails from '../Task-details/TaskDetails';
import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap';


const initialTodoList=[{name:'Project 1', isCompleted: false},
{name:'Project 2', isCompleted: false},
{name:'Project 3', isCompleted: true},
{name:'Project 4', isCompleted: false}  ];
export default ()=>{ 
    const[todoList, setTodoList] = useState(initialTodoList);
    const [showAddNew, setAddNewFlag] = useState(false);

  
    const onStatusChange = task=>{
        let _todoList = todoList.slice(0);
        let _task = _todoList.find(t=> t.name === task.name);
        _task.isCompleted = !task.isCompleted;
        setTodoList(_todoList)
    }

    const toggleAddNew = e=>{
        setAddNewFlag(!showAddNew);
    }

    const addNewTask = e=>{
        setAddNewFlag(!showAddNew);
    }

    return (
    <div id='todo-list'>
    <div id="list">
        <ul>
            {todoList.map((task, i) => <TaskDetails key={i} task={task} onChange={onStatusChange} />)}
        </ul>
        
        {showAddNew && <AddNewTask show={showAddNew} toggle={toggleAddNew} onSave={addNewTask} />}
    </ div>
    <div className='bottom-section'><button className='add-new' onClick={toggleAddNew}>+</button></div>
    </div>
    );
}

const AddNewTask = ({show, toggle, onSave})=>{
    return (
        <Modal funk={true} isOpen={show} toggle={toggle}>          
          <ModalBody>
            <input type={"text"} name='task' />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
}