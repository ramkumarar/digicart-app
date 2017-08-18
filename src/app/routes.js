import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/DemoApp';
import TodoApp from './containers/Todo';
import UserForm from './containers/UserForm/UserForm';


export default <BrowserRouter>
    <div>
        <Route path="/" component={App} exact={true} />
        <Route path="/todos" component={TodoApp} />
        <Route path="/userform" component={UserForm} />
    </div>
</BrowserRouter>;
