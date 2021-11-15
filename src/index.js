import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {TemplatePage} from "./TemplatePage";
import {lSTheme} from "./theme";
import {ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={lSTheme}>
        <TemplatePage />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
