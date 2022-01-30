import React, {useState} from 'react';
import {Modal, ModalBody, ModalFooter, Button, Alert} from 'reactstrap';
import { useSelector} from 'react-redux';

export default ({show, toggle, onSave})=>{
    const todoList = useSelector(_state=> _state.list);
    const [taskName, setTask] = useState('');
    const[isError, setIsError] = useState(false);

    const saveData =  e=>{   
        if(taskName.length < 1) return window.alert(`Task name can't be empty`);
        if(isDuplicate()) return setIsError(true);
        
        if(onSave) onSave({taskName, isCompleted: false });
    }

    const isDuplicate = ()=>{
        if(!todoList || todoList.length < 1) return false;
        return todoList.some(task=> task.taskName.toLowerCase() === taskName.toLowerCase());
    }

    const onChange = e=>{
        setTask(e.target.value);
        setIsError(false);
    }
    
    return (
        <Modal backdrop={false} contentClassName="todo-modal"  size='sm' fade={false} isOpen={show} centered={true}>          
          <ModalBody>
            Task Name<input type={"text"} className='add-new' name='task' onChange={onChange} />
            {isError && <Alert color="warning">Duplcate Task Name</Alert>}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={saveData}>Save</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
}