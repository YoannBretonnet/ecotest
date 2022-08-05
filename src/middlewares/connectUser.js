/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import ky from 'ky';

import {
  CONNECT_USER,
  connectUserFail,
  connectUserSuccess,
  CONNECT_USER_SUCCESS,
  getProfilSuccess,
  getProfilFail,
  GET_PROFIL_FAIL,
  openCloseConnectionModal,
  REGISTER_USER,
  registerUserFail,
  registerUserSuccess,
  openCloseAccountCreationModal,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  deleteAccountSuccess,
  clearAuthSettings,
  deleteAccountFail,
  UPDATE_SECURITY_PARAM,
  openCloseAccountUpdateModal,
  UPDATE_USER_TRAVEL_PARAM,
  LOGOUT,
} from 'src/actions/authentification';

import {
  clearMapSettings,
  openCloseInterestPointModal,
} from 'src/actions/mapSettings';

const connectUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      const state = store.getState();
      ky.post('https://eco-roads.herokuapp.com/api/v1/user/login', {
        throwHttpErrors: false,
        credentials: 'include',
        json: {
          email: state.auth.connectionModal.emailValue,
          password: state.auth.connectionModal.passwordValue,
        },
      })
        .json()
        .then((response) => {
          if (response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
            store.dispatch(connectUserSuccess(true));
          }
          else {
            store.dispatch(connectUserFail(Object.values(response)[0]));
          }
        });
      next(action);
      break;
    case CONNECT_USER_SUCCESS:
      const configProfile = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      };
      axios(configProfile)
        .then((response) => {
          store.dispatch(getProfilSuccess(response.data));
          if (action.isLogin) {
            store.dispatch(openCloseConnectionModal());
          }
        })
        .catch((error) => {
          switch (error.response.status) {
            case 401:
              store.dispatch(getProfilFail());
              break;
            default:
              break;
          }
        });
      next(action);
      break;
    case GET_PROFIL_FAIL:
      localStorage.removeItem('accessToken');
      const configRefreshToken = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/refresh_token',
        withCredentials: true,
      };
      axios(configRefreshToken)
        .then((response) => {
          console.log('access token received');
          localStorage.setItem('accessToken', response.data.accesToken);
          store.dispatch(connectUserSuccess());
        })
        .catch((error) => {
          console.log(error);
          console.log('access token failed');
        });
      next(action);
      break;
    case REGISTER_USER:
      next(action);
      const stateRegister = store.getState();
      const configRegister = {
        method: 'post',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/register',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: stateRegister.auth.accountCreationModal.userNameValue,
          email: stateRegister.auth.accountCreationModal.emailValue,
          password: stateRegister.auth.accountCreationModal.passwordValue,
        },
      };
      axios(configRegister)
        .then(() => {
          store.dispatch(registerUserSuccess());
          store.dispatch(openCloseAccountCreationModal());
          store.dispatch(openCloseConnectionModal());
        })
        .catch((error) => {
          store.dispatch(registerUserFail(Object.values(error.response.data)[0]));
        });
      break;
    case DELETE_ACCOUNT:
      next(action);
      const configProfileDelete = {
        method: 'delete',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      };
      axios(configProfileDelete)
        .then(() => {
          store.dispatch(deleteAccountSuccess(action.navigate));
          store.dispatch(clearAuthSettings());
          store.dispatch(clearMapSettings());
        })
        .catch((error) => {
          store.dispatch(deleteAccountFail(Object.values(error.response.data)[0]));
        });
      break;
    case DELETE_ACCOUNT_SUCCESS:
      next(action);
      action.navigate('/');
      break;
    case UPDATE_SECURITY_PARAM:
      next(action);
      const stateUpdateSecurityParams = store.getState();
      const configProfileSecurityUpdate = {
        method: 'patch',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        data: {
          username: stateUpdateSecurityParams.auth.accountUpdateModal.userNameValue,
          email: stateUpdateSecurityParams.auth.accountUpdateModal.emailValue,
          password: stateUpdateSecurityParams.auth.accountUpdateModal.passwordValue,
        },
      };
      axios(configProfileSecurityUpdate)
        .then((response) => {
          console.log(response);
          store.dispatch(connectUserSuccess());
          store.dispatch(openCloseAccountUpdateModal());
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(deleteAccountFail(Object.values(error.response.data)[0]));
        });
      break;
    case UPDATE_USER_TRAVEL_PARAM:
      next(action);
      const stateUpdateTravelParams = store.getState();
      const configProfileTravelUpdate = {
        method: 'patch',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/profile',
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        data: {
          username: stateUpdateTravelParams.auth.initialUserAccount.userName,
          email: stateUpdateTravelParams.auth.initialUserAccount.email,
          location: stateUpdateTravelParams.mapSettings.localisationSettingsModal.DepartSelected,
          categories: stateUpdateTravelParams.mapSettings.interestPointModal.selected.map((option) => option.id),
          car_id: stateUpdateTravelParams.mapSettings.carSettingsModal.carValue,
        },
      };
      axios(configProfileTravelUpdate)
        .then((response) => {
          store.dispatch(connectUserSuccess());
          store.dispatch(openCloseInterestPointModal());
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(deleteAccountFail(Object.values(error.response.data)[0]));
        });
      break;
    case LOGOUT:
      next(action);
      const configLogout = {
        method: 'get',
        url: 'https://eco-roads.herokuapp.com/api/v1/user/logout',
        withCredentials: true,
      };
      axios(configLogout)
        .then((response) => {
          localStorage.removeItem('accessToken');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      return next(action);
  }
};

export default connectUser;
