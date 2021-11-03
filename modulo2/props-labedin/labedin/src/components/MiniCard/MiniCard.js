import React from "react";
import "./mini-card.css";

function MiniCard(props) {
  return (
    <div className="minicard-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default MiniCard;
