import React from 'react';
import Layout from './Components/Layout';
import Routes from './Components/Routes';
import {BrowserRouter} from 'react-router-dom';

export default () => {
    return (
        <div id="todo-app">
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
