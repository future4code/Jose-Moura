import React from "react";
import "./App.css";

import Etapa1 from "./components/etapa1";
import Etapa2 from "./components/etapa2";
import Etapa3 from "./components/etapa3";
import Final from "./components/final";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  escolherEtapa1 = () => {
    this.setState({
      etapa: "Etapa1",
    });
  };
  escolherEtapa2 = () => {
    this.setState({
      etapa: "Etapa2",
    });
  };
  escolherEtapa3 = () => {
    this.setState({
      etapa: "Etapa3",
    });
  };
  escolherFinal = () => {
    this.setState({
      etapa: "Final",
    });
  };

  escolhaEtapas = () => {
    switch (this.state.etapa) {
      case 1:
        console.log("etapa 1");
        return <Etapa1 />;
      case 2:
        console.log("etapa 2");
        return <Etapa2 />;
      case 3:
        console.log("etapa 3");
        return <Etapa3 />;
      case 4:
        console.log("final");
        return <Final />;
      default:
        return <p>Página não encontada!</p>;
    }
  };
  onClickButton = () => {
    if (this.state.etapa === 1) {
      this.setState({
        etapa: 2,
      });
    } else if (this.state.etapa === 2) {
      this.setState({
        etapa: 3,
      });
    } else if (this.state.etapa === 3) {
      this.setState({
        etapa: 4,
      });
    }
  };

  render() {
    return (
      <div className="App">
        {this.escolhaEtapas()}
        <button className="botao" onClick={this.onClickButton}>
          Próxima Etapa
        </button>
      </div>
    );
  }
}
