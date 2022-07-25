/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
} from '@mui/material';

import { BiChevronRight } from 'react-icons/bi';

import { openCloseConnectionModal, changeInputValue, openCloseAccountCreationModal } from 'src/actions/authentification';
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
          console.log('coucou');
        })}
      >
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
        <p className="modal-proposition">Vous n'avez pas de compte, <span
          className="modal-proposition-link"
          onClick={(() => dispatch(openCloseAccountCreationModal()))}
        >
          créez-en&nbsp;un&nbsp;!
        </span>
        </p>
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

// == Export
export default ModalConnection;
