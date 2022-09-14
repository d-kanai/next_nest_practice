import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
// import {AllFilmsDocument} from '../graphql/generated/graphql';
import { useQuery } from '@apollo/client' 
import { AuthorsDocument } from '../graphql/generated/graphql';

export default function StarWars({ postData }) {
  const { data, error, loading } = useQuery(AuthorsDocument)
  if (loading) return 'loading...';
  console.log(data)
  return (
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>Authors</h2>
      {data.authors.authors.map(author => (
        <div key={author.id}>
          <p>{author.firstName} {author.lastName}: votes {author.posts.map(post=>post.votes)}</p>
        </div>
      ))}
    </Layout>
  );
}