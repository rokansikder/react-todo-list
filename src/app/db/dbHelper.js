import {todoDb} from './firebase-db';
import {ref, onValue, push, update, remove} from '@firebase/database';

export const getAll = (callback) => {
    const starCountRef = ref(todoDb, 'todo-list/');
    onValue(starCountRef, (snapshot) => {
        const todoList = [];
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            childData.uid = childKey;
            todoList.push(childData);
        });
        console.log(todoList);
        if (callback && todoList) callback(todoList);
    });
};

export const saveTask = (task, callback) => {
    task.id = getGuid();
    push(ref(todoDb, 'todo-list/'), task).then(() => {
        if (callback) callback('Data saved successfully');
    });
};

export const updateTask = (task) => {
    const updates = {};
    updates[`todo-list/${task.uid}`] = task;
    update(ref(todoDb), updates);
};

export const deleteTask = (task) => {
    remove(ref(todoDb, `todo-list/${task.uid}`));
};

export const getGuid = (a) => {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, getGuid);
};
