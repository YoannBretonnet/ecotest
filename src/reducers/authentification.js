import { OPEN_CLOSE_CONNECTION_MODAL } from 'src/actions/authentification';
import { OPEN_CLOSE_ACCOUNT_CREATION_MODAL } from 'src/actions/authentification';

export const initialState = {
  connectionModal: {
    isOpen: false,
  },
  accountCreationModal: {
    isOpen: false,
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
      case OPEN_CLOSE_ACCOUNT_CREATION_MODAL:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          isOpen: false,
        },
        accountCreationModal: {
          ...state.accountCreationModal,
          isOpen: !state.accountCreationModal.isOpen,
        },
      };
    default:
      return state;
  }
};

export default reducer;
