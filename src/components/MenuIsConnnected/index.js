/* eslint-disable react/jsx-no-useless-fragment */
// == Style
import './styles.scss';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import {
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { openCloseMenu } from 'src/actions/usability';
import { logout } from 'src/actions/authentification';

import {
  BiCog,
  BiExit,
} from 'react-icons/bi';

// == Composant
function MenuIsConnnected({ inputMenu, setinputMenu }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.usability.menu);
  const args = {
    size: 6,
    littleSize: 3,
  };
  // const [inputMenu, setinputMenu] = useState(null);
  const handleClose = () => {
    dispatch(openCloseMenu(false));
    setinputMenu(null);
  };
  return (
    <>
      {
        matches ? (
          <Menu
            anchorEl={inputMenu}
            id="account-menu"
            open={isOpen}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mb: 1.5,
                width: 'fit-content',
                height: 'fit-content',
                position: 'relative',
                right: 0,
                transform: `translateY(-${args.size}vh) !important`,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  marginTop: 0,
                  transform: 'translateY(10vh)',
                },
                '&:after': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <NavLink
                key="profile"
                className={({ isActive }) => (isActive ? 'menu-is-connected-link menu-is-connected-link--active' : 'menu-is-connected-link')}
                to="/profile"
              >
                <BiCog size={`${args.littleSize}vh`} /> Profil
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                key="logout"
                className={({ isActive }) => (isActive ? 'menu-is-connected-link menu-is-connected-link--active' : 'menu-is-connected-link')}
                to={`${location.pathname}`}
                // onClick={() => dispatch(logout(navigate))}
              >
                <BiExit size={`${args.littleSize}vh`} /> Se déconnecter
              </NavLink>
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            anchorEl={inputMenu}
            id="account-menu"
            open={isOpen}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mb: 1.5,
                width: 'fit-content',
                height: 'fit-content',
                position: 'relative',
                right: 0,
                transform: `translateY(${args.size}vh) !important`,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  marginTop: 0,
                  transform: 'translateY(10vh)',
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <NavLink
                key="profile"
                className={({ isActive }) => (isActive ? 'menu-is-connected-link menu-is-connected-link--active' : 'menu-is-connected-link')}
                to="/profile"
              >
                <BiCog size={`${args.littleSize}vh`} /> Profil
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                key="logout"
                className={({ isActive }) => (isActive ? 'menu-is-connected-link menu-is-connected-link--active' : 'menu-is-connected-link')}
                to={`${location.pathname}`}
                // onClick={() => dispatch(logout(navigate))}
              >
                <BiExit size={`${args.littleSize}vh`} /> Se déconnecter
              </NavLink>
            </MenuItem>
          </Menu>
        )
      }
    </>
  );
}

// == Export
export default MenuIsConnnected;
