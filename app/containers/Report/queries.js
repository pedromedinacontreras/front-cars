import gql from 'graphql-tag';

export const usersQuery = gql`
  query GetUserById($id: String!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;
