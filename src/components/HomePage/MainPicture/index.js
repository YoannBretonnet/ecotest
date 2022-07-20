// == Style
import './styles.scss';
import Box from '@mui/material/Box';

// == Composant
function MainPicture() {
  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2vh' }}>
    <figure class="content-picture">
        <figcaption class="picture-desc">Sortez des sentiers battus <br /> avec Eco-Roads</figcaption>
    </figure>
    </Box>
  );
}

// == Export
export default MainPicture;
