// == Style
import './styles.scss';
import Box from '@mui/material/Box';

// == Composant
function MainPicture() {
  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2vh' }}>
      <figure className="content-picture">
        <figcaption className="picture-desc">Découvrez votre région en toute sérénité <br />au volant de votre voiture électrique</figcaption>
      </figure>
    </Box>
  );
}

// == Export
export default MainPicture;
