import { createActions } from 'redux-actions';
let nextTodoId = 0;

const { addTodo, setVisibilityFilter, toggleTodo } = createActions({
   ADD_TODO: text => ({ id: nextTodoId++, text }),
   SET_VISIBILITY_FILTER: filter => ({ filter}),
   TOGGLE_TODO: id => ({id})
});

export {addTodo, setVisibilityFilter, toggleTodo};

