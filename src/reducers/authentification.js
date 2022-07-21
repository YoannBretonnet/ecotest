import { OPEN_CLOSE_CONNECTION_MODAL, MAKE_PASSWORD_VISIBLE_OR_NOT } from 'src/actions/authentification';

export const initialState = {
  connectionModal: {
    isOpen: false,
    isHiddenPassword: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_CONNECTION_MODAL:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          isOpen: !state.connectionModal.isOpen,
        },
      };
    case MAKE_PASSWORD_VISIBLE_OR_NOT:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          isHiddenPassword: !state[action.modalElement].isHiddenPassword,
        },
      };
    default:
      return state;
  }
};

export default reducer;
