import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import MiniCard from "./components/MiniCard/MiniCard";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Augusto"
          descricao="Oi, eu sou o Augusto. Sou aluno Labebu. Estou cursando Desenvolvedor Web FullStack no turno integral."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        <MiniCard
          imagem="https://cdn.icon-icons.com/icons2/935/PNG/512/email-closed-outlined-back-envelope-interface-symbol_icon-icons.com_73262.png"
          nome="E-mail: "
          descricao=" jaugustomoura@outlook.com"
        />

        <MiniCard
          imagem="https://img.icons8.com/ios/500/address--v1.png"
          nome="Endereço: "
          descricao=" Rua Edite Braga"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Suporte Técnico I"
          descricao="Auxiliando clientes com dificuldades!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
