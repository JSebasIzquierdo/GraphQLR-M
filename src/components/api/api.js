import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { useQuery, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const FindCharacters = gql`
  query characterCards {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

export const FindSpecificCharacter = gql`
  query characterSpecific($id: ID!) {
    character(id: $id) {
      name
      status
      type
      gender
      location {
        name
        type
        dimension
      }
      image
      episode {
        name
        air_date
        characters {
          name
        }
      }
    }
  }
`;
