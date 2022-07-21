// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { openCloseAccountCreationModal } from 'src/actions/authentification';
import { useSelector, useDispatch } from 'react-redux';

import ModalElement from '../ModalElement';
import InputPassword from '../InputPassword';

// == Composant
function ModalAccountCreation() {
  const dispatch = useDispatch();
  const modalElement = 'accountCreationModal';
  const inputElement = 'emailValue';
  const {
    userNameValue, emailValue,
  } = useSelector((state) => state.auth[modalElement]);
  return (
    <ModalElement
      dispatchCall={openCloseAccountCreationModal}
      modalElement="accountCreationModal"
    >
      <h1 className="modal-title">Créez votre compte</h1>
      <TextField 
      id="userName-input" 
      label="Nom Utilisateur" 
      variant="outlined"
      sx={{ width: '80%' }}
        value={userNameValue}
        onChange={(event) => dispatch(changeInputValue(event.target.value, inputElement, modalElement))}
       />
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
    </ModalElement>
  );
}

// == Export
export default ModalAccountCreation;
