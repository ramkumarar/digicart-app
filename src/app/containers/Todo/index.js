import React from 'react';
import Footer from '../../components/Todo/Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
