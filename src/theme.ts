import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f3e8', // Warm parchment
      paper: '#fdfaf5', // Lighter parchment for cards
    },
    primary: {
      main: '#1a2f23', // Ink Black / Deep Forest Green
    },
    secondary: {
      main: '#c5a059', // Old Gold
    },
    text: {
      primary: '#2c2c2c', // Charcoal
      secondary: '#5d5d5d', // Softer ink
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif',
    h1: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.2 },
    h2: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.3 },
    h3: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 600, letterSpacing: '0.02em' },
    h4: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 600, letterSpacing: '0.02em' },
    h5: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 500, letterSpacing: '0.02em' },
    h6: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 500, letterSpacing: '0.02em' },
    button: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', fontWeight: 600, letterSpacing: '0.05em' },
    body1: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', color: '#2c2c2c', lineHeight: 1.7, fontWeight: 400 },
    body2: { fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif', color: '#2c2c2c', lineHeight: 1.7, fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px', // Slight rounding
          textTransform: 'none',
          padding: '8px 24px',
          boxShadow: 'none',
          borderBottom: '2px solid transparent', // Reserve space for brush stroke
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Ink flow transition
          '&:hover': {
            backgroundColor: 'rgba(26, 47, 35, 0.08)', // Subtle ink wash
            borderBottom: '2px solid #1a2f23', // Brush stroke effect
            boxShadow: 'none',
            transform: 'translateY(-1px)', // Slight lift
          },
        },
        contained: {
          backgroundColor: '#1a2f23',
          color: '#f7f3e8',
          boxShadow: '0 2px 4px rgba(26, 47, 35, 0.2)', // Soft ink shadow
          '&:hover': {
            backgroundColor: '#2c4c3b',
            boxShadow: '0 4px 8px rgba(26, 47, 35, 0.3)',
            borderBottom: '2px solid transparent', // No border for contained
          },
        },
        outlined: {
          border: '1px solid #1a2f23',
          color: '#1a2f23',
          '&:hover': {
            backgroundColor: 'rgba(26, 47, 35, 0.05)',
            border: '1px solid #1a2f23',
            borderBottom: '2px solid #1a2f23',
          },
        },
        text: {
          color: '#1a2f23',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fdfaf5', // Paper
          borderRadius: '4px',
          boxShadow: 'none', // Remove elevation
          border: '1px solid rgba(26, 47, 35, 0.08)', // Fine ink outline
          transition: 'border-color 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(26, 47, 35, 0.2)',
          }
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(247, 243, 232, 0.95)', // Translucent parchment
          backdropFilter: 'blur(8px)',
          color: '#2c2c2c',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(26, 47, 35, 0.05)',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: { letterSpacing: '-0.02em', color: '#1a2f23' },
        h2: { letterSpacing: '-0.01em', color: '#1a2f23' },
        h3: { color: '#1a2f23' },
        h4: { color: '#1a2f23' },
        h5: { color: '#1a2f23' },
        h6: { color: '#1a2f23' },
      }
    }
  },
});

export default theme;