/* eslint-disable max-len */
// == Import
// import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';
import { openCloseLocalisationModal, changeMapSettingAutocompleteValue, updateListOfLocalisation } from 'src/actions/mapSettings';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  Autocomplete,
  CircularProgress,
} from '@mui/material';

import { BiChevronRight } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

// == Composant
function ModalLocalisationSettings({ reducerRoute }) {
  const dispatch = useDispatch();
  const {
    DepartProposition,
    isDepartLoading,
    DepartSelected,
    ArrivProposition,
    isArrivLoading,
    ArrivSelected,
  } = useSelector((state) => state.mapSettings.localisationSettingsModal);
  const modalElement = 'localisationSettingsModal';
  const depart = {
    proposition: 'DepartProposition',
    inputElement: 'DepartSelected',
    loading: 'isDepartLoading',
  };
  const arriv = {
    proposition: 'ArrivProposition',
    inputElement: 'ArrivSelected',
    loading: 'isArrivLoading',
  };
  console.log(isDepartLoading);
  return (
    <ModalElement
      dispatchCall={openCloseLocalisationModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Définissez votre trajet</h1>
      <form
        className="modal-form-localisation"
        onSubmit={((event) => {
          event.preventDefault();
          console.log('coucou');
        })}
      >
        <Autocomplete
          inputValue={DepartSelected.label}
          onChange={(_event, value) => dispatch(changeMapSettingAutocompleteValue(value, depart.inputElement, modalElement))}
          noOptionsText="Aucune proposition"
          disablePortal
          disableClearable
          id="modal-form-departure"
          options={DepartProposition}
          loading={isDepartLoading}
          getOptionLabel={(option) => option.properties.label}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              onChange={(event) => dispatch(updateListOfLocalisation(event.target.value, depart.inputElement, depart.loading, depart.proposition))}
              {...params}
              label="Point de départ"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isDepartLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        <Autocomplete
          inputValue={ArrivSelected.label}
          onChange={(_event, value) => dispatch(changeMapSettingAutocompleteValue(value, arriv.inputElement, modalElement))}
          noOptionsText="Aucune proposition"
          disablePortal
          disableClearable
          id="modal-form-departure"
          options={ArrivProposition}
          loading={isArrivLoading}
          getOptionLabel={(option) => option.properties.label}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              onChange={(event) => dispatch(updateListOfLocalisation(event.target.value, arriv.inputElement, arriv.loading, arriv.proposition))}
              {...params}
              label="Point de d'arrivée"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isArrivLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

// == Export
export default ModalLocalisationSettings;
