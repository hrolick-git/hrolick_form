import { createMuiTheme } from '@material-ui/core';
const theme = createMuiTheme();

export default {
  body1: {
    color: 'rgba(255, 255, 255, .8)',
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.03em",
    fontFamily: "'Clear Sans', sans-serif",
    fontWeight: 300,
    [theme.breakpoints.up('md')]: {
      fontSize: "18px",
      lineHeight: "27px",
    },
  },
  h1: {
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "30px",
    textTransform: "uppercase",
    marginBottom: "20px !important",
    fontFamily: "'Exo 2', sans-serif",
    [theme.breakpoints.up('sm')]: {
      fontSize: "40px",
      lineHeight: "36px",
      marginBottom: "20px !important",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "60px",
      lineHeight: "60px",
      marginBottom: "30px !important",
    },
  },
  h2: {
    fontWeight: 700,
    fontSize: "24px ",
    lineHeight: "24px",
    textTransform: 'uppercase',
    marginBottom: "20px !important",
    fontFamily: "'Exo 2', sans-serif",
    [theme.breakpoints.up('sm')]: {
      fontSize: "28px ",
      lineHeight: "28px ",
      marginBottom: "30px !important",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "30px ",
      lineHeight: "30px ",
    },
  },
  h3: {
    fontWeight: 700,
    fontSize: "18px ",
    lineHeight: "18px",
    textTransform: 'uppercase',
    fontFamily: "'Exo 2', sans-serif",
    [theme.breakpoints.up('md')]: {
      fontSize: "20px ",
      lineHeight: "34px",
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '-0.06px'
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.05px'
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.05px'
  },
  overline: {
    fontWeight: 500
  }
};
