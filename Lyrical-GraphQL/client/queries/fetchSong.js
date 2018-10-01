import gql from 'graphql-tag';

const query = gql`
  query {
    songs {
      title
      id
    }
  }
`;

export default query;