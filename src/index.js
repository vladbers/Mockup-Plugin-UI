import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {lSTheme} from "./theme";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {Onboard} from "./onboarding";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={lSTheme}>
          <BrowserRouter>
                <Onboard />
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
