import {applyMiddleware, createStore,} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './state';

export default (initialState) => {

  const appliedMiddleware = applyMiddleware(thunk);
  const enhancer = composeWithDevTools(appliedMiddleware);

  return createStore(rootReducer, initialState, enhancer);
}