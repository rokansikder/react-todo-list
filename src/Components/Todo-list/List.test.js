import React from 'react';
import {render} from '@testing-library/react';
import List from './List';
import {store} from '../../App/Store/store';
import {Provider} from 'react-redux';

test('renders task list', () => {
    const {getByText} = render(
        <Provider store={store}>
            <List />
        </Provider>,
    );
    expect(getByText(/No List/i)).toBeInTheDocument();
});
