import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
`;

const IconImage = styled.img`
  margin-right: 5px;
`;

export default class IconeComContador extends React.Component {
  state = {
    ContadorIcone: 0,
  };

  onClickCurtidas = () => {
    const valorAtual = this.state.ContadorIcone;
    const novoEstado = { ContadorIcone: valorAtual + 1 };

    this.setState(novoEstado);
  };

  onClickDesCurtidas = () => {
    this.setState({
      valorContador: this.state.ContadorIcone - 1,
    });
  };
  render() {
    return (
      <IconContainer>
        <IconImage
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.onClickCurtidas}
        />
        <p>{this.state.ContadorIcone}</p>
      </IconContainer>
    );
  }
}
