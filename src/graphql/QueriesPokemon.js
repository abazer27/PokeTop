import gql from "graphql-tag";

export const GET_POKEDEX = gql`
  query pokemon_list($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      status
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon_details($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
    }
  }
`