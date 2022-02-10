import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskDetails from './TaskDetails';

const todoTask = { id: 2, taskName: 'Project 2', isCompleted: false };

test('renders task details', () => {
    const { getByText } = render(<TaskDetails task={todoTask} />);
    expect(getByText(/Project 2/i)).toBeInTheDocument();
});

test('Check null task props', () => {
    render(<TaskDetails />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
});
