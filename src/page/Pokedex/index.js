import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEDEX } from "../../graphql/QueriesPokemon";
import { PokemonList } from "../../components/PokemonList";

export function Pokedex() {
  const { data } = useQuery(GET_POKEDEX, {
    variables: { limit: 99, offset: 0 },
  });
  return (
    <div>
      <PokemonList pokemon={data?.pokemons.results} />
    </div>
  )

}