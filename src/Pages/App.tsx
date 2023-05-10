import React from 'react';
import Botao from '../componentes/Botao/Botao';
import Formulario from '../componentes/Formulario/Formulario';
import Lista from '../componentes/Lista/Lista';
import './style.scss';


function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
