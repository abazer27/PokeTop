import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POKEMON } from "../../graphql/QueriesPokemon";
import { PokemonDetail } from "../../components/PokemonDetail";

export function PokemonDetailPage() {
  const { name } = useParams();
  const { data } = useQuery(GET_POKEMON, {
    variables: { name: name }
  });
  return (
    <div>
      <PokemonDetail detail={data?.pokemon} />
    </div>
  )
}