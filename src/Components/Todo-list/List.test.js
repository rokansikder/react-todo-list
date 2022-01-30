import React from 'react';
import { render } from '@testing-library/react';
import  List from './List';


test('renders task list', () => {
    const { getByText } = render(<List /> );  
    console.log(getByText);
    expect(getByText(/Project/i)).toBeInTheDocument();
  });