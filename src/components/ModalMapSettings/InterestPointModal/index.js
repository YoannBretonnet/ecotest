// == Import
// import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';
import { openCloseInterestPointModal, selectInterestPoint, openCloseLocalisationModal } from 'src/actions/mapSettings';
import data from 'src/assets/data/interestPoint.json';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  IconButton,
  Box,
} from '@mui/material';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

const isTrue = (selected, option) => selected.includes(option);
// == Composant
function InterestPointModal({ reducerRoute }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.mapSettings.interestPointModal.selected);
  const isError = selected.length > 3;
  const modalElement = 'interestPointModal';
  return (
    <ModalElement
      dispatchCall={openCloseInterestPointModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Point d'intérets</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          dispatch(openCloseInterestPointModal());
        })}
      >
        <FormControl
          required
          error={isError}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend">3 Max</FormLabel>
          <FormGroup>
            {data.map((option) => (
              <FormControlLabel
                key={option.id}
                sx={{ color: 'black' }}
                control={(
                  <Checkbox
                    checked={isTrue(selected, option)}
                    onChange={(event) => dispatch(selectInterestPoint(event.target.checked, option))}
                    name={option.name}
                    sx={{
                      '&.Mui-checked': {
                        color: '#6cc573',
                      },
                    }}
                  />
              )}
                label={option.name}
              />
            ))}
          </FormGroup>
          {isError && (
            <FormHelperText>Veuillez retirer des points d'intérets</FormHelperText>
          )}
        </FormControl>
        <Box
          component="nav"
          sx={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          <IconButton
            sx={{ color: 'black' }}
            type="button"
            onClick={() => {
              dispatch(openCloseInterestPointModal());
              dispatch(openCloseLocalisationModal());
            }}
          >
            <BiChevronLeft size="8vh" />
          </IconButton>
          <IconButton sx={{ color: 'black' }} type="submit">
            <BiChevronRight size="8vh" />
          </IconButton>
        </Box>
      </form>
    </ModalElement>
  );
}

// == Export
export default InterestPointModal;
