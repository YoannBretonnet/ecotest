// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

import { openCloseConnectionModal } from 'src/actions/authentification';

import ModalElement from '../ModalElement';

// == Composant
function ModalConnection() {
  return (
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement="connectionModal"
    >
      <h1 className="modal-title">Se connecter</h1>
      <TextField id="email-input" label="Email" variant="outlined" />
      <TextField id="password-input" label="Password" variant="outlined" />
      {/* <p className="modal-proposition">Vous n'avez pas de compte, créez-en un !</p> */}
    </ModalElement>
  );
}

// == Export
export default ModalConnection;
