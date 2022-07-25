// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
} from '@mui/material';

import {
  BiChevronRight,
} from 'react-icons/bi';

import { openCloseAccountCreationModal, changeInputValue } from 'src/actions/authentification';
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
    userNameValue, emailValue, passwordValue,
  } = useSelector((state) => state.auth[modalElement]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("coucou")
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
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

// == Export
export default ModalAccountCreation;
