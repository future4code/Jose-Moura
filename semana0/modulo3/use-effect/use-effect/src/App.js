import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const containerApp = styled.div`
  margin: 0 auto;
`

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  const pegarPokeName = (e) => {
    setPokeName(e.target.value)
  }

  const pegarPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res => {
        // função que está setando no estado os 151 pokemons
        setPokeList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    pegarPokemons();
  }, [pokeName]);

  return (
    <containerApp>
      <select onChange={pegarPokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} 
                value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </containerApp>
  );
}

export default App;