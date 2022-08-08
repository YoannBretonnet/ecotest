/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
import DOMPurify from 'dompurify';
// == Import
import PropTypes from 'prop-types';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  FormHelperText,
  CircularProgress,
} from '@mui/material';

import {
  BiChevronRight,
} from 'react-icons/bi';

import {
  openCloseAccountCreationModal,
  changeInputValue,
  registerUser,
} from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

import ModalElement from 'src/components/ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalAccountCreation({ reducerRoute }) {
  const dispatch = useDispatch();
  const modalElement = 'accountCreationModal';
  const inputEmailElement = 'emailValue';
  const inputUserNameElement = 'userNameValue';
  const {
    userNameValue,
    emailValue,
    error,
    isLoading,
  } = useSelector((state) => state.auth[modalElement]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(registerUser());
  };

  return (
    <ModalElement
      dispatchCall={openCloseAccountCreationModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Créez votre compte</h1>
      <form
        className="modal-form-coreation-account"
        onSubmit={
          handleSubmit
        }
      >
        <TextField
          id="userName-input"
          label="Nom Utilisateur"
          variant="outlined"
          sx={{ width: '100%' }}
          value={userNameValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputUserNameElement, modalElement))}
        />
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          sx={{ width: '100%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputEmailElement, modalElement))}
        />
        <InputPassword
          modalElement={modalElement}
        />
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{DOMPurify.sanitize(error.message, { USE_PROFILES: { html: false } })}</FormHelperText>
        )}
        {
          !isLoading ? (
            <IconButton sx={{ color: 'black', width: 'fit-content', margin: 'auto' }} type="submit">
              <BiChevronRight size="8vh" />
            </IconButton>
          ) : (
            <CircularProgress sx={{ color: '#6cc573', alignSelf: 'center' }} size="6vh" />
          )
        }
      </form>
    </ModalElement>
  );
}

ModalAccountCreation.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
};

// == Export
export default ModalAccountCreation;
