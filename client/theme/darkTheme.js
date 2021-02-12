import {createMuiTheme} from '@material-ui/core/styles'
import {indigo} from '@material-ui/core/colors'
import {fonts, backupFonts} from './fonts'
// Dark theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#badef2',
      light: '#badef2',
      dark: '#e3eff7',
      contrastText: '#e9edc9'
    },
    secondary: {
      main: '#badef2',
      contrastText: '#06d6a0'
    },
    text: {
      primary: '#eaf0ce',
      secondary: '#badef2'
    },
    background: {
      paper: '#292f33',
      default: '#616a70'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: `${fonts.body}, ${backupFonts.sans}`,
    body1: {
      fontFamily: `${fonts.body}, ${backupFonts.sans}`,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.2rem'
    },
    body2: {
      fontFamily: `${fonts.body2}, ${backupFonts.sans}`,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.2rem'
    },
    h1: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '2.75rem',
      fontWeight: 400,
      lineHeight: '3.125rem'
    },
    h2: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1.625rem',
      fontWeight: 800,
      lineHeight: '1.875rem'
    },
    h3: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1.4 rem',
      fontWeight: 800,
      lineHeight: '1.4375rem'
    },
    h4: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1.32rem',
      fontWeight: 400,
      lineHeight: '1.4375rem'
    },
    h5: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.875rem'
    },
    h6: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1.13rem',
      fontWeight: 400,
      lineHeight: '2.75rem'
    },
    subtitle1: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.4375rem'
    },
    caption: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '0.9375rem'
    },
    button: {
      fontFamily: `${fonts.header}, ${backupFonts.sans}`,
      textTransform: 'lowercase',
      textDecoration: 'none',
      color: '#000000'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#badef2'
      },
      containedSecondary: {
        backgroundColor: '#badef2',
        '&:hover': {
          backgroundColor: '#fff'
        }
      },
      outlined: {
        borderColor: 'black'
      }
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'unset',
        color: '#979797'
      },
      filled: {
        color: '#000000'
      }
    },
    MuiInputBase: {
      root: {
        fontFamily: 'freight-text-pro, serif'
      }
    },
    MuiInputLabel: {
      root: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '1rem'
      }
    },
    MuiGrid: {
      container: {
        maxWidth: 1600,
        margin: '0',
        padding: '0'
      }
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  fontWeight: 400,
  spacing: 2,
  alignItems: 'center',
  justify: 'center',
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2
})

export default theme
