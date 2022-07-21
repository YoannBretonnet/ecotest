export const OPEN_CLOSE_CONNECTION_MODAL = 'OPEN_CLOSE_CONNECTION_MODAL';
export const MAKE_PASSWORD_VISIBLE_OR_NOT = 'MAKE_PASSWORD_VISIBLE_OR_NOT';

export const openCloseConnectionModal = () => ({
  type: OPEN_CLOSE_CONNECTION_MODAL,
});

export const makePasswordVisibleOrNot = (modalElement) => ({
  type: MAKE_PASSWORD_VISIBLE_OR_NOT,
  modalElement,
});
