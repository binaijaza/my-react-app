import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonAbilities from "../components/PokemonAbilities";

export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        console.log(result.data);
        setPokemon(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!pokemon) {
    return <p>loadind data</p>;
  }
  if (pokemon.sprites == undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto bg-gray-300">
      <input type="text" placeholder="search" />
      <img src={pokemon.sprites.front_default} />
      <h2 className="text-2xl">{pokemon.name} </h2>

      <div>
        <p>the abilities of pokemon are</p>

        <PokemonAbilities abilities={pokemon.abilities} />
      </div>
    </div>
  );
}
