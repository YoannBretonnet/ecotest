import {
  OPEN_CLOSE_CONNECTION_MODAL,
  MAKE_PASSWORD_VISIBLE_OR_NOT,
  CHANGE_INPUT_VALUE,
  OPEN_CLOSE_ACCOUNT_CREATION_MODAL,
  CONNECT_USER,
  CONNECT_USER_FAIL,
  CONNECT_USER_SUCCESS,
  GET_PROFIL_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  OPEN_CLOSE_ACCOUNT_UPDATE_MODAL,
  OPEN_CLOSE_ACCOUNT_UPDATE_ALERT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT,
  CLEAR_AUTH_SETTINGS,
  DELETE_ACCOUNT_FAIL,
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
    isLoading: false,
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
    isRegisteredAlert: false,
  },
  accountUpdateModal: {
    isOpen: false,
    isHiddenPassword: false,
    userNameValue: '',
    emailValue: '',
    passwordValue: '',
    error: {
      isError: false,
      message: undefined,
    },
    isUpdatedAlert: false,
  },
  accountDeleteAlert: {
    error: {
      isError: false,
      message: undefined,
    },
    isDeleteAlert: false,
  },
  accountDeleteAction: {
    error: {
      isError: false,
      message: undefined,
    },
    isDeleting: false,
  },
  initialUserAccount: {
    userName: undefined,
    email: undefined,
    id: undefined,
    car: undefined,
    location: undefined,
    categories: [],
  },
  // initialUserAccount: {
  //   userName: 'Luffy.DMonkey',
  //   email: 'luffy@gmail.com',
  //   id: '9bb0c279-c5fb-402d-a167-0f2fb43f9eec',
  //   car: {
  //     brand_id: 4,
  //     name: 'Audi',
  //     car_id: 24,
  //     model: 'e-tron S',
  //     image: 'Audi_E-tron_S_remove.png',
  //   },
  //   location: {
  //     address: 'boulevard arlong',
  //     street_number: 6,
  //     zipcode: 63360,
  //     city: 'Grand Line',
  //     lat: 100,
  //     lon: 1,
  //   },
  //   categories: [
  //     {
  //       category: 'Panoramas',
  //       id: 1,
  //     },
  //     {
  //       category: 'Culture',
  //       id: 2,
  //     },
  //   ],
  // },
  isConnected: false,
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
          isLoading: true,
        },
        accountCreationModal: {
          ...state.accountCreationModal,
          isRegisteredAlert: false,
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
          isLoading: false,
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
          isLoading: false,
        },
      };
    case GET_PROFIL_SUCCESS:
      if (!action.data.car || !action.data.location || !action.data.categories) {
        return {
          ...state,
          initialUserAccount: {
            ...state.initialUserAccount,
            userName: action.data.username,
            email: action.data.email,
            id: action.data.id,
          },
          accountUpdateModal: {
            ...state.accountUpdateModal,
            userNameValue: action.data.username,
            emailValue: action.data.email,
          },
          isConnected: true,
        };
      }
      if (action.data.car || action.data.location || action.data.categories) {
        return {
          ...state,
          initialUserAccount: {
            ...state.initialUserAccount,
            userName: action.data.username,
            email: action.data.email,
            id: action.data.id,
            car: action.data.car,
            location: action.data.location,
            categories: [
              ...action.data.categories,
            ],
          },
          accountUpdateModal: {
            ...state.accountUpdateModal,
            userNameValue: action.data.username,
            emailValue: action.data.email,
          },
          isConnected: true,
        };
      }
      break;
    case REGISTER_USER:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          isLoading: true,
        },
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          userNameValue: '',
          emailValue: '',
          passwordValue: '',
          error: {
            isError: true,
            message: action.message,
          },
          isLoading: false,
        },
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        accountCreationModal: {
          ...state.accountCreationModal,
          userNameValue: '',
          emailValue: '',
          passwordValue: '',
          error: {
            isError: false,
            message: '',
          },
          isLoading: false,
          isRegisteredAlert: true,
        },
      };
    case OPEN_CLOSE_ACCOUNT_UPDATE_MODAL:
      return {
        ...state,
        accountUpdateModal: {
          ...state.accountUpdateModal,
          isOpen: !state.accountUpdateModal.isOpen,
        },
        accountDeleteAction: {
          ...state.accountDeleteAction,
          error: {
            isError: false,
            message: undefined,
          },
          isDeleting: false,
        },
      };
    case OPEN_CLOSE_ACCOUNT_UPDATE_ALERT:
      return {
        ...state,
        accountDeleteAlert: {
          ...state.accountDeleteAlert,
          isDeleteAlert: !state.accountDeleteAlert.isDeleteAlert,
        },
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accountDeleteAction: {
          ...state.accountDeleteAction,
          error: {
            isError: false,
            message: undefined,
          },
          isDeleting: true,
        },
      };
    case CLEAR_AUTH_SETTINGS:
      return {
        ...initialState,
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        accountDeleteAction: {
          ...state.accountDeleteAction,
          error: {
            isError: true,
            message: action.message,
          },
          isDeleting: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
