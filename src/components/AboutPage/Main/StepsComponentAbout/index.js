/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
// == Style
import './styles.scss';

import { Paper, Box } from '@mui/material';

// == Composant
function StepsComponent() {
  const team = useSelector((state) => state.usability.team);
  const args = {
    squareSize: '25vh',
  };
  return (
    <Box
      component="section"
      sx={{
        margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content', maxHeight: '50vh',
      }}
    >
      <Box
        component="article"
        sx={{
          margin: 'auto', width: 'fit-content', height: 'fit-content', display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '7vw',
        }}
      >
        {
                  team.map((item, i) => (
                    <Paper
                      key={i}
                      sx={{
                        width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3vh',
                      }}
                    >
                      <img
                        className="StepsAboutImage"
                        crossOrigin="anonymous"
                        src={item.image}
                        alt={item.name}
                        width="100px"
                      />
                      <h3 className="stepsAbout-name">{item.name}</h3>
                      <p className="stepsAbout-content">{item.description}</p>
                    </Paper>
                  ))
        }
      </Box>
    </Box>
  );
}

// == Export
export default StepsComponent;
