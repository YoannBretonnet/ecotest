import {
  OPEN_CLOSE_CONNECTION_MODAL,
  MAKE_PASSWORD_VISIBLE_OR_NOT,
  CHANGE_INPUT_VALUE,
  OPEN_CLOSE_ACCOUNT_CREATION_MODAL,
  CONNECT_USER,
  CONNECT_USER_FAIL,
  CONNECT_USER_SUCCESS,
} from 'src/actions/authentification';

export const initialState = {
  connectionModal: {
    isOpen: false,
    isHiddenPassword: false,
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
  },
  accountCreationModal: {
    isOpen: false,
    isHiddenPassword: false,
    userNameValue: '',
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
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
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: action.inputValue,
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
    case CONNECT_USER:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          emailValue: '',
          passwordValue: '',
        },
      };
    case CONNECT_USER_FAIL:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          error: {
            isError: true,
            message: action.message,
          },
        },
      };
    case CONNECT_USER_SUCCESS:
      return {
        ...state,
        connectionModal: {
          ...state.connectionModal,
          error: {
            isError: false,
            message: '',
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
