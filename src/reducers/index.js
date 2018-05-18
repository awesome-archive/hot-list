import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { listReducer } from './list';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  list: listReducer
});
