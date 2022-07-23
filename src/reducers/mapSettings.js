import {
  OPEN_CLOSE_LOCALISATION_MODAL,
  CHANGE_MAP_SETTING_INPUT_VALUE,
  UPDATE_LIST_OF_LOCALISATION,
  UPDATE_LIST_OF_LOCALISATION_SUCCESS,
  CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE,
  UPDATE_LIST_OF_LOCALISATION_ABORT,
} from 'src/actions/mapSettings';

export const initialState = {
  localisationSettingsModal: {
    isOpen: false,
    isDepartLoading: false,
    DepartSelected: {
      label: '',
      Lat: undefined,
      Long: undefined,
    },
    DepartProposition: [],
    isArrivLoading: false,
    ArrivSelected: {
      label: '',
      Lat: undefined,
      Long: undefined,
    },
    ArrivProposition: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_LOCALISATION_MODAL:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          isOpen: !state.localisationSettingsModal.isOpen,
          DepartProposition: [],
          ArrivProposition: [],
        },
      };
    case CHANGE_MAP_SETTING_INPUT_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: action.inputValue,
        },
      };
    case UPDATE_LIST_OF_LOCALISATION:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: true,
          [action.inputElement]: {
            ...state.localisationSettingsModal[action.inputElement],
            label: action.inputValue,
            Lat: undefined,
            Long: undefined,
          },
        },
      };
    case UPDATE_LIST_OF_LOCALISATION_SUCCESS:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: false,
          [action.propositionElement]: action.data.features,
        },
      };
    case CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE:
      return {
        ...state,
        [action.modalElement]: {
          ...state[action.modalElement],
          [action.inputElement]: {
            label: action.properties.label,
            Lat: action.geometry.coordinates[1],
            Long: action.geometry.coordinates[0],
          },
        },
      };
    case UPDATE_LIST_OF_LOCALISATION_ABORT:
      return {
        ...state,
        localisationSettingsModal: {
          ...state.localisationSettingsModal,
          [action.loadingElement]: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
