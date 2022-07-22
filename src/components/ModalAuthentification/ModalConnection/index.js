/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { openCloseConnectionModal, changeInputValue, openCloseAccountCreationModal } from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

// ==Component
import ModalElement from '../ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalConnection() {
  const dispatch = useDispatch();
  const modalElement = 'connectionModal';
  const inputElement = 'emailValue';
  const {
    emailValue,
  } = useSelector((state) => state.auth[modalElement]);
  return (
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement={modalElement}
    >
      <h1 className="modal-title">Se connecter</h1>
      <form className="modal-form-connection">
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          sx={{ width: '100%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputElement, modalElement))}
        />
        <InputPassword
          modalElement={modalElement}
        />
      </form>
      <p className="modal-proposition">Vous n'avez pas de compte, <span
        className="modal-proposition-link"
        onClick={(() => dispatch(openCloseAccountCreationModal()))}
      >
        créez-en&nbsp;un&nbsp;!
      </span>
      </p>
    </ModalElement>
  );
}

// == Export
export default ModalConnection;
