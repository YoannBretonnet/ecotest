// == Style
import './styles.scss';

import {
  Box, Modal, Paper,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';


// == Composant
function ModalElement({ children, dispatchCall, modalElement }) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.auth[modalElement]);
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
            width: '100%', height: 'fit-content', borderRadius: '10%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4vh 0', gap: '2vh',
          }}
        >
          {children}
        </Paper>
      </Box>
    </Modal>
  );
}

// == Export
export default ModalElement;
