import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

// == Style
import './styles.scss';
import {
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
    BiUser,
    BiDotsVerticalRounded,
} from 'react-icons/bi';

import { openCloseConnectionModal } from 'src/actions/authentification';

import Map from './Map';
import Sidebar from './Sidebar';
import MenuIsConnnected from 'src/components/MenuIsConnnected';

// == Composant
function Main() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('tablet'));
    const isConnected = useSelector((state) => state.auth.isConnected);
    const args = {
        size: 6,
      };

  return (
    <Box component="main" id="main-HomePage">
        <Map />
        {
            !isConnected ? (
        <Sidebar 
            text = "Pour sauvegarder votre trajet, connectez-vous"
        />
        ) : (
            <Sidebar 
            text = "Sauvegardez ce trajet dans vos favoris"
        />
            )
        }
        {matches ? (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: '0', top: 'unset', width: 'fit-content',
          }}
        >
          {
        !isConnected ? (
          <IconButton
            onClick={() => dispatch(openCloseConnectionModal())}
          >
            <BiUser size={`${args.size}vh`} />
          </IconButton>
        ) : (
          <>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-controls={isOpen ? 'account-menu' : undefined}
                aria-haspopup="true"
              >
                <BiDotsVerticalRounded size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
            <MenuIsConnnected
              inputMenu={inputMenu}
              setinputMenu={setinputMenu}
            />
          </>
        )
      }
        </Box>
      ) : (
        <Box
          component="section"
          sx={{
            position: 'fixed', right: '0', bottom: 'unset', top: '0', width: 'fit-content',
          }}
        >
          {
        !isConnected ? (
          <IconButton
            onClick={() => dispatch(openCloseConnectionModal())}
          >
            <BiUser size={`${args.size}vh`} />
          </IconButton>
        ) : (
          <>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleClick}
                aria-controls={isOpen ? 'account-menu' : undefined}
                aria-haspopup="true"
              >
                <BiDotsVerticalRounded size={`${args.size}vh`} />
              </IconButton>
            </Tooltip>
            <MenuIsConnnected
              inputMenu={inputMenu}
              setinputMenu={setinputMenu}
            />
          </>
        )
      }
        </Box>
      )}
    </Box>
  );
}

// == Export
export default Main;
