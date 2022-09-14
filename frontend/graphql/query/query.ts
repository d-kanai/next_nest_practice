import gql from 'graphql-tag';
// gql`
//   query AllFilms($first: Int) {
//     allFilms(first: $first) {
//       edges {
//         node {
//           episodeID
//           title
//         }
//       }
//     }
//   }
// `
gql`
query Authors {
  authors {
    authors {
      id
      firstName
      lastName
      posts {
        id
        title
        votes
      }
    }
  } 
}
`