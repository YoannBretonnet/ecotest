// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { openCloseAccountCreationModal } from 'src/actions/authentification';

import ModalElement from '../ModalElement';

// == Composant
function ModalAccountCreation() {
  return (
    <ModalElement
      dispatchCall={openCloseAccountCreationModal}
      modalElement="accountCreationModal"
    >
      <h1 className="modal-title">Créez votre compte</h1>
      <TextField 
      id="userName-input" 
      label="User Name" 
      variant="outlined"
      type="string" 
       />
      <TextField 
      id="email-input" 
      label="Email" 
      variant="outlined"
      type="email" 
      />
      <TextField 
      id="password-input" 
      label="Password" 
      variant="outlined" />
      type="password" 
    </ModalElement>
  );
}

// == Export
export default ModalAccountCreation;
