import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import {AllFilmsDocument} from '../graphql/generated/graphql';
import { useQuery } from '@apollo/client' 

export default function StarWars({ postData }) {
  const { data, error, loading } = useQuery(AllFilmsDocument)
  if (loading) return 'loading...';
  console.log(data)
  return (
    <Layout home={false}> 
      <h2 className={utilStyles.headingLg}>Star Wars</h2>
        {data.allFilms.edges.map(record => (
          <div key={record.node.episodeID}>
            <p>Episode{record.node.episodeID} : {record.node.title}</p>
          </div>
        ))}
    </Layout>
  );
}