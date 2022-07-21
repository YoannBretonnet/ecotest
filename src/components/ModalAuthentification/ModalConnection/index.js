// == Style
import './styles.scss';

import {
  TextField,
} from '@mui/material';

// == Component
import ModalAccountCreation from 'src/components/ModalAuthentification/ModalAccountCreation';
import ModalElement from '../ModalElement';

import { openCloseConnectionModal } from 'src/actions/authentification';
import { openCloseAccountCreationModal } from 'src/actions/authentification';

import { useSelector, useDispatch } from 'react-redux';


// == Composant
function ModalConnection() {
  const dispatch = useDispatch();

  return (
    <>
    <ModalElement
      dispatchCall={openCloseConnectionModal}
      modalElement="connectionModal"
    >
      <h1 className="modal-title">Se connecter</h1>
      <TextField id="email-input" label="Email" variant="outlined" />
      <TextField id="password-input" label="Password" variant="outlined" />
      <p className="modal-proposition">Vous n'avez pas de compte, <span
        className="modal-proposition-link"
        style={{ cursor:"pointer" }}
        href={null}
        onClick={() => dispatch(openCloseAccountCreationModal())}
      >
        créez-en un !
      </span>
      </p>
    </ModalElement>
    <ModalAccountCreation />
    </>
    
  );
}

// == Export
export default ModalConnection;
