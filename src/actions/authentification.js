export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const MAKE_PASSWORD_VISIBLE_OR_NOT = 'MAKE_PASSWORD_VISIBLE_OR_NOT';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const OPEN_CLOSE_ACCOUNT_CREATION_MODAL = 'OPEN_CLOSE_ACCOUNT_CREATION_MODAL';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_USER_FAIL = 'CONNECT_USER_FAIL';
export const CONNECT_USER_SUCCESS = 'CONNECT_USER_SUCCESS';
export const GET_PROFIL_SUCCESS = 'GET_PROFIL_SUCCESS';
export const GET_PROFIL_FAIL = 'GET_PROFIL_FAIL';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const OPEN_CLOSE_ACCOUNT_UPDATE_MODAL = 'OPEN_CLOSE_ACCOUNT_UPDATE_MODAL';
export const OPEN_CLOSE_ACCOUNT_UPDATE_ALERT = 'OPEN_CLOSE_ACCOUNT_UPDATE_ALERT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const CLEAR_AUTH_SETTINGS = 'CLEAR_AUTH_SETTINGS';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';
export const UPDATE_SECURITY_PARAM = 'UPDATE_SECURITY_PARAM';
export const UPDATE_USER_TRAVEL_PARAM = 'UPDATE_USER_TRAVEL_PARAM';
export const LOGOUT = 'LOGOUT';
export const MAKE_PASSWORD_UPDATABLE_OR_NOT = 'MAKE_PASSWORD_UPDATABLE_OR_NOT';

export const openCloseConnectionModal = () => ({
  type: OPEN_CLOSE_CONNECTION_MODAL,
});

export const makePasswordVisibleOrNot = (modalElement) => ({
  type: MAKE_PASSWORD_VISIBLE_OR_NOT,
  modalElement,
});

export const changeInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});

export const openCloseAccountCreationModal = () => ({
  type: OPEN_CLOSE_ACCOUNT_CREATION_MODAL,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const connectUserFail = (message) => ({
  type: CONNECT_USER_FAIL,
  message,
});

export const connectUserSuccess = (isLogin) => ({
  type: CONNECT_USER_SUCCESS,
  isLogin,
});

export const getProfilSuccess = (data) => ({
  type: GET_PROFIL_SUCCESS,
  data,
});

export const getProfilFail = () => ({
  type: GET_PROFIL_FAIL,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const registerUserFail = (message) => ({
  type: REGISTER_USER_FAIL,
  message,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const openCloseAccountUpdateModal = () => ({
  type: OPEN_CLOSE_ACCOUNT_UPDATE_MODAL,
});

export const openCloseAcountUpdateAlert = () => ({
  type: OPEN_CLOSE_ACCOUNT_UPDATE_ALERT,
});

export const deleteAccount = (navigate) => ({
  type: DELETE_ACCOUNT,
  navigate,
});

export const deleteAccountSuccess = (navigate) => ({
  type: DELETE_ACCOUNT_SUCCESS,
  navigate,
});

export const clearAuthSettings = () => ({
  type: CLEAR_AUTH_SETTINGS,
});

export const deleteAccountFail = (message) => ({
  type: DELETE_ACCOUNT_FAIL,
  message,
});

export const updateUserSecurityParam = () => ({
  type: UPDATE_SECURITY_PARAM,
});

export const updateUserTravelParam = () => ({
  type: UPDATE_USER_TRAVEL_PARAM,
});

export const logout = (navigate) => ({
  type: LOGOUT,
  navigate,
});

export const makePasswordUpdatableOrNot = (boolean) => ({
  type: MAKE_PASSWORD_UPDATABLE_OR_NOT,
  boolean,
});
