import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import count from './simple';

const reducers = combineReducers({
  count
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
