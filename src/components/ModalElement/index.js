/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';

// == Style
import './styles.scss';

import {
  Box, Modal, Paper,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

// == Composant
function ModalElement({ children, dispatchCall, modalElement, reducerRoute }) {
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
