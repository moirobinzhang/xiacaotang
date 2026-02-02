import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f3e8', // Warm parchment
    },
    primary: {
      main: '#2c2c2c', // Ink Black
    },
    secondary: {
      main: '#c5a059', // Old Gold
    },
    text: {
      primary: '#2c2c2c', // Ink Black
      secondary: '#b22222', // Cinnebar Red
    },
  },
  typography: {
    fontFamily: 'Playfair Display, serif', // Traditional Taoist style
    h1: { fontFamily: 'Playfair Display, serif' },
    h2: { fontFamily: 'Playfair Display, serif' },
    h3: { fontFamily: 'Playfair Display, serif' },
    h4: { fontFamily: 'Playfair Display, serif' },
    h5: { fontFamily: 'Playfair Display, serif' },
    h6: { fontFamily: 'Playfair Display, serif' },
    button: { fontFamily: 'Playfair Display, serif' },
    body1: { fontFamily: 'Playfair Display, serif', color: '#2c2c2c' },
    body2: { fontFamily: 'Playfair Display, serif', color: '#2c2c2c' },
  },
});

export default theme;