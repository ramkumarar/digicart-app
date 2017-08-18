import { connect } from 'react-redux';
import { toggleTodo } from './actions';
import TodoList from '../../components/Todo/TodoList';
import { getVisibleTodos } from './selectors';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)

});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
