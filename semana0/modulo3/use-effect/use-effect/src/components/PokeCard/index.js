import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`

`
const paragrafo = styled.p`
    color: red;
`



export default function PokeCard(props){
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
      pegaPokemon(props.pokemon);
    }, [props.pokemon]);

    useEffect(() => {
      if (!pokemon) {
        pegaPokemon(pokemon);
      }
    }, [pokemon]);

     const pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          setPokemon(response.data);
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        });
    };

    return(
        <container>
        <paragrafo>{pokemon.name}</paragrafo>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </container>
    )
}