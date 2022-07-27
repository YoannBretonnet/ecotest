import { combineReducers } from 'redux';

import authentification from './authentification';
import mapSettings from './mapSettings';
import usability from './usability';


const rootReducer = combineReducers({
  auth: authentification,
  mapSettings: mapSettings,
  usability: usability,
});

export default rootReducer;
