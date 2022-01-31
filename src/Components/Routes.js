import React from 'react';
import {Route, Routes} from 'react-router';
import Todos from './Todo-list/Todos';
import Calender from './Calendar/Calender';

const ToDoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/list" element={<Todos />} />
            <Route path="/calendar" element={<Calender />} />
        </Routes>
    );
};

export default ToDoRoutes;
