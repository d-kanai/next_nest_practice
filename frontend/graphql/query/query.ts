import gql from 'graphql-tag';
gql`
  query AllFilms($first: Int) {
    allFilms(first: $first) {
      edges {
        node {
          episodeID
          title
        }
      }
    }
  }
`