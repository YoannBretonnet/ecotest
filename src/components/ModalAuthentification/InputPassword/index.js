/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';

// == Import
import { useSelector, useDispatch } from 'react-redux';
import { makePasswordVisibleOrNot, changeInputValue, makePasswordUpdatableOrNot } from 'src/actions/authentification';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';

// == Style
import './styles.scss';

// == Composant
function InputPassword({ modalElement, updatePage }) {
  const dispatch = useDispatch();
  const {
    isHiddenPassword,
    passwordValue,
    passwordUpdate,
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
          <>
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => dispatch(makePasswordVisibleOrNot(modalElement))}
                edge="end"
              >
                {isHiddenPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </IconButton>
            </InputAdornment>
            {
              (updatePage && !passwordUpdate) && (
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  zIndex: '100',
                  '&.MuiButton-root': {
                    margin: 'auto', color: '#6cc573', border: '1px solid #6cc573',
                  },
                  '&.MuiButton-root:hover': {
                    backgroundColor: 'white',
                  },
                }}
                onClick={() => dispatch(makePasswordUpdatableOrNot(true))}
              >
                Changer Mot de passe
              </Button>
              )
            }
          </>
      )}
        label="Password"
      />
    </FormControl>
  );
}

InputPassword.defaultProps = {
  updatePage: false,
};

InputPassword.propTypes = {
  modalElement: PropTypes.string.isRequired,
  updatePage: PropTypes.bool,
};

// == Export
export default InputPassword;
