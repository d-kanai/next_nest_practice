import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import { useQuery } from '@apollo/client' 
import gql from 'graphql-tag';

const GET_ALL_FILMS = gql`
  query AllFilms($first: Int) @client {
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

export default function Post({ postData }) {
  const { data, error, loading } = useQuery(GET_ALL_FILMS)
  if (loading) return 'loading...';
  console.log(data)
  return (
    <Layout>
      <h2 className={utilStyles.headingLg}>Star Wars</h2>
        {data.allFilms.edges.map(record => (
          <div key={record.node.episodeID}>
            <p>Episode{record.node.episodeID} : {record.node.title}</p>
          </div>
        ))}
    </Layout>
  );
}