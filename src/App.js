import React from 'react';
import './scss/_app.scss';
import MultiStepForm from "./views/MultiStepForm";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

function App() {

  return (
      <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <MultiStepForm />
          </MuiPickersUtilsProvider>
      </ThemeProvider>
  );
}

export default App;