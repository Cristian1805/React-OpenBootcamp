import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadirmos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
//!Los estilos propioos deben ir debajo del bootstrap para no pisarlos
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
