/* eslint-disable max-len */
// == Style
import './styles.scss';

import { Paper, Box } from '@mui/material';


// == Composant
function StepsComponent() {
    const items = [
        {
          name: 'Gaëtan Santucci',
          image: 'gaetan.png',
          description: 'Product Owner',
        },
        {
          name: 'Océane Vignot',
          image: 'oceane.png',
          description: 'Scrum Master, Git Master',
        },
        {
          name: 'Alexandre Humbert',
          image: 'alex.png',
          description: 'Lead Dev Back',
        },
          {
          name: 'Aymen El Bakkaly',
          image: 'aymen.png',
          description: 'Lead Dev Front',
        },
        {
          name: 'Yoann Bretonnet',
          image: 'yoann.png',
          description: 'Dev Front',
        },
      ];
    const args = {
        squareSize: '25vh',
    };
    return (
        <Box component="section" sx={{ margin: '2vh auto 0 auto', width: 'fit-content', height: 'fit-content' }}>
            <Box component="article" sx={{ margin: 'auto', width: 'fit-content', height: 'fit-content', display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '7vw' }}>
                {
                    items.map((item, i) => (
            <Paper
              key={i}
              sx={{
                width: args.squareSize, height: args.squareSize, background: 'transparent', border: '0.4vh solid black', borderRadius: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3vh',
              }}>
                <img className= "StepsAboutImage" crossOrigin="anonymous" src={`https://eco-roads.herokuapp.com/images/${item.image}`}  alt={item.name}
              width="100px" />
              <h3 className="stepsAbout-name">{item.name}</h3>
              <p className="stepsAbout-content">{item.description}</p>
            </Paper>
            ))
        }
        </Box>
    </Box >
  );
}

// == Export
export default StepsComponent;
