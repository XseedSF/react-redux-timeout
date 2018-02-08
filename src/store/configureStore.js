import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxTimeout } from 'redux-timeout'

import rootReducer from '../reducers';

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, reduxTimeout())
      // other store enhancers if any
    )
  );
};
export default configureStore;
