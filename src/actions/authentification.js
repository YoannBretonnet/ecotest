export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const MAKE_PASSWORD_VISIBLE_OR_NOT = 'MAKE_PASSWORD_VISIBLE_OR_NOT';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const OPEN_CLOSE_ACCOUNT_CREATION_MODAL = 'OPEN_CLOSE_ACCOUNT_CREATION_MODAL';

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
<<<<<<< HEAD
});
=======
>>>>>>> 91f82755ac63dfd16ff3bca8f821e5be9678c1d5

export const openCloseAccountCreationModal = () => ({
  type: OPEN_CLOSE_ACCOUNT_CREATION_MODAL,
});
