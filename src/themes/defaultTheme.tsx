import { createMuiTheme } from '@material-ui/core/styles';
import shadows from '@material-ui/core/styles/shadows';

const options = {
  palette: {
    primary: {
      main: '#BB933E',
      light: '#D6B877',
      dark: '#5C4618'
    },
    secondary: {
      main: '#255B87',
      light: '#6B9AC1',
      dark: '#072B48'
    },
    cherry: {
      main: '#CC5287',
      light: '#ECB3CC',
      dark: '#540829'
    },
    grass: {
      main: '#93CC52',
      light: '#D1ECB3',
      dark: '#305408'
    },
    background: {
      paper: '#E5D8BC',
      default: '#F4EFE4'
    }
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontFamily: "'Trajan Sans Pro', 'Roboto'"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:active': {}
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 'none',
        boxShadow: shadows[16]
      }
    }
  }
};

export const defaultTheme = createMuiTheme(options);
