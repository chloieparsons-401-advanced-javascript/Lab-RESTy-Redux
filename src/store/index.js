import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reporter from './reporter.js';

import historyReducer from '../reducers/history-reducers';
import formReducer from '../reducers/form-reducers';

/**
 * combineReducers object
 * @description Redux capability which combines all reducers
 */
let reducers = combineReducers({
  history: historyReducer,
  form: formReducer
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk, reporter)));

/**
 * export default
 * @description exports the store
 */
export default store;