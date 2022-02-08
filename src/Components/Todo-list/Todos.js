import './Todos.scss';
import React, {useState} from 'react';
import List from './List';
import Todo from './ToDo';
import {saveTask} from '../../app/db/dbHelper';

const Todos = () => {
    const [showAddNew, setAddNewFlag] = useState(false);

    const toggleAddNew = (e) => {
        setAddNewFlag(!showAddNew);
    };

    const addNewTask = (task) => {
        saveTask(task);
        setAddNewFlag(!showAddNew);
    };

    return (
        <div id="todo-list">
            <List id="10" />
            <Todo show={showAddNew} toggle={toggleAddNew} onSave={addNewTask} />
            <div className="bottom-section">
                <button className="add-new" onClick={toggleAddNew}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Todos;
