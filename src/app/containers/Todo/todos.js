
import { handleActions } from 'redux-actions';
const todos = handleActions({
    ADD_TODO: (state, action) => ([
          ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
    ]),

    TOGGLE_TODO: (state, action) => (state.map(todo =>
        (todo.id === action.payload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      ))

}, []);

export default todos;
