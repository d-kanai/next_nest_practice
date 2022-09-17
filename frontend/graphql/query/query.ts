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
gql`
mutation CreatePost {
  createPost(data:{title: "new post", votes: 1, author:{connect: {id: 1}}}) {
    id
    authorId
    title
    votes
  }
}`