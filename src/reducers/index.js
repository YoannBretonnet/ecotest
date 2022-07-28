import { combineReducers } from 'redux';

import authentification from './authentification';
import mapSettings from './mapSettings';
import usability from './usability';
import userProfile from './userProfile';

const rootReducer = combineReducers({
  auth: authentification,
  mapSettings: mapSettings,
  usability: usability,
  profile: userProfile,
});

export default rootReducer;
