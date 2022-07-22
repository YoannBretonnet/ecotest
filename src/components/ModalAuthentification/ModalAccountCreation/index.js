// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { openCloseAccountCreationModal, changeInputValue } from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

import ModalElement from '../ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalAccountCreation() {
  const dispatch = useDispatch();
  const modalElement = 'accountCreationModal';
  const inputEmailElement = 'emailValue';
  const inputUserNameElement = 'userNameValue';
  const {
    userNameValue, emailValue, passwordValue,
  } = useSelector((state) => state.auth[modalElement]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ModalElement
      dispatchCall={openCloseAccountCreationModal}
      modalElement={modalElement}
    >
      <h1 className="modal-title">Créez votre compte</h1>
      <form 
       onSubmit={
          handleSubmit
        }>
        <TextField 
        id="userName-input" 
        label="Nom Utilisateur" 
        variant="outlined"
        sx={{ width: '80%' }}
          value={userNameValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputUserNameElement, modalElement))}
        />
        <TextField
          type="email"
          id="email-input"
          label="Email"
          variant="outlined"
          sx={{ width: '80%' }}
          value={emailValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value, inputEmailElement, modalElement))}
        />
        <InputPassword
            modalElement={modalElement}
          />
          <button type="submit"
            className="login-form-button">
            Enregistrez-vous
          </button>
      </form>
    </ModalElement>
  );
}

// == Export
export default ModalAccountCreation;
