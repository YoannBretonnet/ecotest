// == Import
import { NavLink } from 'react-router-dom';

import { Box, Tooltip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Style
import './styles.scss';

// == Composant
function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('mobile'));

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4.5vh', width: '80vw', position: 'absolute', bottom: '0', maxHeight: '7vh',
      }}
    >
      {matches ? (
        <div id="footer-decorations">
          <div id="footer-decorations-first-element" />
          <div id="footer-decorations-second-element" />
          <div id="footer-decorations-third-element" />
        </div>
      ) : (
        <div id="footer-decorations">
          <div id="footer-decorations-desktop-first-element" />
          <div id="footer-decorations-desktop-second-element" />
          <div id="footer-decorations-desktop-third-element" />
        </div>
      )}
      <nav className="menu-footer">
        <Tooltip title="À propos">
          <NavLink
            key="about"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/about"
          >
            À propos
          </NavLink>
        </Tooltip>
        <p className="menu-separator">-</p>
        <Tooltip title="CGU">
          <NavLink
            key="cgu"
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/cgu"
          >
            CGU
          </NavLink>
        </Tooltip>
      </nav>
    </Box>
  );
}

// == Export
export default Footer;
