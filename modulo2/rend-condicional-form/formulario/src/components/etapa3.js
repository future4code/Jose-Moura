import React from "react";

export default class etapa1 extends React.Component {
  state = {
    motivo: "cancelamento",
  };

  onchangeNome = (ev) => {
    console.log("funcionou Nome");
    this.setStates({ valorNome: ev.target.value });
  };
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h2>5. Por que você não terminou um curso de graduação?</h2>
        <input />
        <h2>6. Você fez algum curso complementar?</h2>
        <div>
          <select>
            <option>Nenhum</option>
            <option>Curso técnico</option>
            <option>Curso de inglês</option>
          </select>
        </div>
      </div>
    );
  }
}
