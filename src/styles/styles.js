import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
