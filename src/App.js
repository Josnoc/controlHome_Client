import Routes from './Routes';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { purple, blueGrey, } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Routes />
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
