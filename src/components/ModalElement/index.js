/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';

// == Style
import './styles.scss';

import {
  Box, Modal, Paper, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';

// == Composant
function ModalElement({
  children, dispatchCall, modalElement, reducerRoute,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('mobile'));
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state[reducerRoute][modalElement]);
  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(dispatchCall())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {
        matches ? (
          <Box
            component="section"
            sx={{
              width: '80%', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                width: '100%', height: 'fit-content', borderRadius: '5vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4vh 0', gap: '2vh', position: 'relative',
              }}
            >
              {children}
            </Paper>
          </Box>
        ) : (
          <Box
            component="section"
            sx={{
              width: '30vw', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                width: '100%', height: 'fit-content', borderRadius: '5vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4vh 0', gap: '2vh', position: 'relative',
              }}
            >
              {children}
            </Paper>
          </Box>
        )
      }
    </Modal>
  );
}

ModalElement.propTypes = {
  children: PropTypes.array.isRequired,
  dispatchCall: PropTypes.func.isRequired,
  modalElement: PropTypes.string.isRequired,
  reducerRoute: PropTypes.string.isRequired,
};

// == Export
export default ModalElement;
