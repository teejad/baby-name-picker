import React from 'react';
import ReactDOM from 'react-dom';

import "normalize-css";
// import "./css/styles.css";

import App from './App';
import { NamesProvider } from './providers/Names';
import { AppStateProvider } from './providers/AppState';  

//Data 
// import { names } from './data';


ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App/>
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
