import React from 'react';
import Botao from '../componentes/Botao/Botao';
import Formulario from '../componentes/Formulario/Formulario';
import Lista from '../componentes/Lista/Lista';
import style from './App.module.scss';
import Cronometro from '../componentes/Cronometro/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
