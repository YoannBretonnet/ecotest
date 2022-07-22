export const OPEN_CLOSE_CAR_MODAL = 'OPEN_CLOSE_CAR_MODAL';

export const openCloseCarModal = () => ({
  type: OPEN_CLOSE_CAR_MODAL,
});

export const CHANGE_MAP_SETTING_INPUT_VALUE = 'CHANGE_MAP_SETTING_INPUT_VALUE';

export const changeMapSettingInputValue = (inputValue, inputElement, modalElement) => ({
  type: CHANGE_MAP_SETTING_INPUT_VALUE,
  inputValue,
  inputElement,
  modalElement,
});
