import React from 'react';
import ReactDOM from 'react-dom';
//Importando los componentes
import App from './App';
import Componente1 from "./Componente1"
import Componente2 from "./Componente2"
import Header from "./Header.jsx"
import Componente3 from "./Componente3.jsx"

//ReactDOM.render(queRenderiza,DondeRenderiza);
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Componente1 />
    <Componente2 />
    <App />
    <App />
    <Componente3 />
  </React.StrictMode>,
  document.getElementById('root')
);