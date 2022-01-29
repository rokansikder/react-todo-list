import React from 'react';
import { render } from '@testing-library/react';
import  TaskDetails from './TaskDetails';

test('renders task details', () => {
    const { getByText } = render(<TaskDetails /> );  
    expect(getByText(/details/i)).toBeInTheDocument();
  });