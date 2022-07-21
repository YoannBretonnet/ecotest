/* eslint-disable react/jsx-closing-tag-location */
// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal, changeInputValue } from 'src/actions/authentification';

import ModalElement from '../ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalConnection() {
  const dispatch = useDispatch();
  const modalElement = 'connectionModal';
  const inputEmailElement = 'emailValue';
  const {
    emailValue,
  } = useSelector((state) => state.auth[modalElement]);
  return (
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement={modalElement}
    >
      <h1 className="modal-title">Se connecter</h1>
      <TextField
        type="email"
        id="email-input"
        label="Email"
        variant="outlined"
        sx={{ width: '80%' }}
        value={emailValue}
        onChange={(event) => dispatch(changeInputValue(event.target.value, inputElement, modalElement))}
      />
      <InputPassword
        modalElement={modalElement}
      />
      <p className="modal-proposition">Vous n'avez pas de compte, <span
        className="modal-proposition-link"
        // onClick={() => }
      >
        créez-en&nbsp;un&nbsp;!
      </span>
      </p>
    </ModalElement>
  );
}

// == Export
export default ModalConnection;
