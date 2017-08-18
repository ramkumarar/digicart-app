import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';


import todoApp from '../containers/Todo/reducers';
//import userform from '../containers/UserForm/reducers';
const rootReducer = combineReducers({
    routing,
    todoApp,
    form: reduxFormReducer
});

export default rootReducer;
