export const OPEN_CLOSE_LOCALISATION_MODAL = 'OPEN_CLOSE_LOCALISATION_MODAL';
export const UPDATE_LIST_OF_LOCALISATION = 'UPDATE_LIST_OF_LOCALISATION';
export const UPDATE_LIST_OF_LOCALISATION_SUCCESS = 'UPDATE_LIST_OF_LOCALISATION_SUCCESS';
export const CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE = 'CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE';
export const CHANGE_MAP_SETTING_INPUT_VALUE = 'CHANGE_MAP_SETTING_INPUT_VALUE';
export const UPDATE_LIST_OF_LOCALISATION_ABORT = 'UPDATE_LIST_OF_LOCALISATION_ABORT';

export const openCloseLocalisationModal = () => ({
  type: OPEN_CLOSE_LOCALISATION_MODAL,
});

export const changeMapSettingInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_MAP_SETTING_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});

export const updateListOfLocalisation = (inputValue, inputElement, loadingElement, propositionElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION,
  inputValue,
  inputElement,
  loadingElement,
  propositionElement,
});

export const updateListOfLocalisationSuccess = (data, propositionElement, loadingElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION_SUCCESS,
  data,
  propositionElement,
  loadingElement,
});

export const changeMapSettingAutocompleteValue = ({ properties, geometry }, inputElement, modalElement) => ({
  type: CHANGE_MAP_SETTING_AUTOCOMPLETE_VALUE,
  properties,
  geometry,
  inputElement,
  modalElement,
});

export const updateListOfLocalisationAbort = (loadingElement) => ({
  type: UPDATE_LIST_OF_LOCALISATION_ABORT,
  loadingElement,
});
