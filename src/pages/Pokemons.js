import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PokemonPage from "./PokemonPage";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [err, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((result) => setPokemons(result.data.results))
      .catch((err) => setError(err));
  }, []);

  if (err) return <div>there is eeero fetch in yor data {err}</div>;
  if (!pokemons) {
    return <p>loading</p>;
  }
  return (
    <div className="container mx-auto bg-gray-300 m-10">
      <ul>
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <Link to={`/pokemon/${index}`} key={index}>
                <div className="bg-indigo-500 rounded-md shadow-lg p-1 text-white mt-3">
                  <li>{pokemon.name}</li>
                </div>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
