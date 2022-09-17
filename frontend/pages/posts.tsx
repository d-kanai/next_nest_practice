import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import { useQuery } from '@apollo/client' 
import { FindManyPostsDocument } from '../graphql/generated/graphql';
import Link from 'next/link';

export default function Posts({ postData }) {
  const { data, error, loading } = useQuery(FindManyPostsDocument)
  if (loading) return 'loading...'
  return (
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>Posts</h2>
      <Link href="/posts/new">New Posts</Link>
      {data.findManyPost.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </Layout>
  );
}