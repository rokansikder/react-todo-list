import React from 'react';
import {Route, Routes} from 'react-router';
import List from './Todo-list/List';
import Calender from './Calendar/Calender';

const ToDoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/list" element={<List />} />
            <Route path="/calendar" element={<Calender />} />
        </Routes>
    );
};

export default ToDoRoutes;
