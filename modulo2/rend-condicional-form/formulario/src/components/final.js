import React from "react";
import styled from "styled-components";

export const botao = styled.button`
  display: none;
`;

export default class etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </div>
    );
  }
}
