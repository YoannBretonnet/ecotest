import { OPEN_CLOSE_CONNECTION_MODAL } from 'src/actions/authentification';

export const initialState = {
  connectionModal: {
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
    default:
      return state;
  }
};

export default reducer;
