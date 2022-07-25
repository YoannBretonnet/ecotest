export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const MAKE_PASSWORD_VISIBLE_OR_NOT = 'MAKE_PASSWORD_VISIBLE_OR_NOT';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const OPEN_CLOSE_ACCOUNT_CREATION_MODAL = 'OPEN_CLOSE_ACCOUNT_CREATION_MODAL';
export const CONNECT_USER = 'CONNECT_USER';

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
