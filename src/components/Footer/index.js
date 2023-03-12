// == Initialisation
import { NavLink, useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';

// == Style
import './styles.scss';
import { Box, Tooltip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// == Composant
function Footer() {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: '4.5vh', 
        width: '80vw', 
        position: 'fixed', 
        bottom: '0', 
        maxHeight: '7vh',
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
        <Tooltip title="Accueil ">
          <NavLink
            key="homePage"
            style={({ isActive }) => ({ display: isActive ? 'none' : 'flex', gap: '1vw' })}
            to="/"
          >
            Accueil
          </NavLink>
        </Tooltip>
       
        <Tooltip title="À propos">
          <NavLink
            key="about"
            style={({ isActive }) => ({ display: isActive ? 'none' : 'flex', gap: '1vw' })}
            to="/about"
          >
            À propos
          </NavLink>
        </Tooltip>
      </nav>
    </Box>
  );
}

// == Export
export default Footer;
