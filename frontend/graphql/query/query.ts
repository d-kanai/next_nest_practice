import gql from 'graphql-tag';

gql`
query FindManyPosts {
  findManyPost{
    id
    authorId
    published
    title
    votes
  }
}
`