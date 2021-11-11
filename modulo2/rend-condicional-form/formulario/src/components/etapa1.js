import React from "react";
//import Etapa2 from "./etapa2";

export default class etapa1 extends React.Component {
  state = {
    etapa: "etapa1",
  };

  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h2>1. Qual seu nome?</h2>
        <input />
        <h2>2. Qual sua idade?</h2>
        <input />
        <h2>3. Qual seu email?</h2>
        <input />
        <div>
          <h2>4. Qual sua escolaridade?</h2>
          <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
          </select>
        </div>
      </div>
    );
  }
}
