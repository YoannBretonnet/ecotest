import { combineReducers } from 'redux';

import reducerExample from './reducer-example';

const rootReducer = combineReducers({
  example: reducerExample,
});

export default rootReducer;
