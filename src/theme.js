import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    black: {
      main: '#000000',
    },
    white: {
      main: '#FFFFFF',
    },
    blackv2: {
      main: '#333',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
