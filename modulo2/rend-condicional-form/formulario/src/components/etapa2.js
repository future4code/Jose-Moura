import React from "react";

export default class etapa1 extends React.Component {
  state = {
    curso: "TI",
    UNIDADE: "montese",
  };

  onchangeNome = (ev) => {
    console.log("funcionou Nome");
    this.setStates({ valorNome: ev.target.value });
  };
  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <h2>5. Qual curso?</h2>
        <input />
        <h2>6. Qual a unidade de ensino?</h2>
        <input />
      </div>
    );
  }
}
