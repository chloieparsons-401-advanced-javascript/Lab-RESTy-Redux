import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reporter from './middleware/reporter';

import historyReducer from '../reducers/history-reducer';
import formReducer from '../reducers/form-reducer';

/**
 * combineReducers object
 * @description Redux capability which combines all reducers
 */
let reducers = combineReducers({
  history: historyReducer,
  form: formReducer
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(reporter, thunk)));

/**
 * export default
 * @description exports the store
 */
export default store;