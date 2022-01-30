import React from 'react';
import {render} from '@testing-library/react';
import TaskDetails from './TaskDetails';

const todoTask = {id: 2, taskName: 'Project 2', isCompleted: false};

test('renders task details', () => {
    const {getByText} = render(<TaskDetails task={todoTask} />);
    console.log(getByText);
    expect(getByText(/Project 2/i)).toBeInTheDocument();
});
