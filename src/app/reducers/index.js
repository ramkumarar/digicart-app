import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';


import todoApp from '../containers/Todo/reducers';


const rootReducer = combineReducers({
    routing,
    todoApp
});

export default rootReducer;
