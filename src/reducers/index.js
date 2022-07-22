import { combineReducers } from 'redux';

import authentification from './authentification';
import mapSettings from './mapSettings';

const rootReducer = combineReducers({
  auth: authentification,
  mapSettings: mapSettings,
});

export default rootReducer;
