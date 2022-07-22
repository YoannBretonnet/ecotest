import { combineReducers } from 'redux';

import authentification from './authentification';

const rootReducer = combineReducers({
  auth: authentification,
});

export default rootReducer;
