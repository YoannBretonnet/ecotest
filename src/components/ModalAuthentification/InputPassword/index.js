/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';

// == Import
import { useSelector, useDispatch } from 'react-redux';
import { makePasswordVisibleOrNot, changeInputValue } from 'src/actions/authentification';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

// == Style
import './styles.scss';

// == Composant
function InputPassword({ modalElement }) {
  const dispatch = useDispatch();
  const {
    isHiddenPassword,
    passwordValue,
  } = useSelector((state) => state.auth[modalElement]);
  const inputElement = 'passwordValue';

  return (
    <FormControl sx={{ width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={isHiddenPassword ? 'text' : 'password'}
        value={passwordValue}
        onChange={(event) => dispatch(changeInputValue(event.target.value, inputElement, modalElement))}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => dispatch(makePasswordVisibleOrNot(modalElement))}
              edge="end"
            >
              {isHiddenPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </IconButton>
          </InputAdornment>
      )}
        label="Password"
      />
    </FormControl>
  );
}

InputPassword.propTypes = {
  modalElement: PropTypes.string.isRequired,
};

// == Export
export default InputPassword;
