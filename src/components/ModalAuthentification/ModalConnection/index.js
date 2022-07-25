/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
  FormHelperText,
} from '@mui/material';

import { BiChevronRight } from 'react-icons/bi';

import {
  openCloseConnectionModal, changeInputValue, openCloseAccountCreationModal, connectUser,
} from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

// ==Component
import ModalElement from 'src/components/ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalConnection({ reducerRoute }) {
  const dispatch = useDispatch();
  const modalElement = 'connectionModal';
  const inputElement = 'emailValue';
  const {
    emailValue,
    error,
  } = useSelector((state) => state.auth[modalElement]);
  return (
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Se connecter</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          dispatch(connectUser());
        })}
      >
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          required
          sx={{ width: '100%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputElement, modalElement))}
        />
        <InputPassword
          modalElement={modalElement}
          required
        />
        <p className="modal-proposition">Vous n'avez pas de compte, <span
          className="modal-proposition-link"
          onClick={(() => dispatch(openCloseAccountCreationModal()))}
        >
          créez-en&nbsp;un&nbsp;!
        </span>
        </p>
        {error.isError && (
        <FormHelperText
          error={error.isError}
        >{error.message}</FormHelperText>
        )}
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

ModalConnection.propTypes = {
  reducerRoute: PropTypes.string.isRequired,
};

// == Export
export default ModalConnection;
