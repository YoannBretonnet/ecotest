// == Import
import { useSelector, useDispatch } from 'react-redux';
import { makePasswordVisibleOrNot } from 'src/actions/authentification';

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
  const { isHiddenPassword } = useSelector((state) => state.auth[modalElement]);

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={isHiddenPassword ? 'text' : 'password'}
        // value={values.password}
        // onChange={handleChange('password')}
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

// == Export
export default InputPassword;
