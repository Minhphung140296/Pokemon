import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      image
      maxCP
      maxHP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
export default GET_POKEMONS;