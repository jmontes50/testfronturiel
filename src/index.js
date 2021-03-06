import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#FB8F1D',
      contrastText: '#fff',
    },
    secondary:{
      main:'#1ABE84',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily:[
      'Inter'
    ],
    fontSize:13,
    button: {
      textTransform: 'none'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
