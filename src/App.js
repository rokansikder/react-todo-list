import React from 'react';
import Layout from './Components/Layout';
import Routes from './Components/Routes';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
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

export default App;
