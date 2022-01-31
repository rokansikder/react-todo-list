import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './app/Store/store';
import App from './App';

it('CheckboxWithLabel changes the text after click', () => {});
test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    expect(screen.findAllByRole(/link/i)).not.toBeNull();
});
