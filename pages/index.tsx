import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../libs/posts';
import { useQuery } from '@apollo/client' 
import gql from 'graphql-tag';

const GET_ALL_FILMS = gql`
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

export default function Home({allPostsData}) {
  const { data, error, loading } = useQuery(GET_ALL_FILMS)
  if (loading) return 'loading...';
  console.log(data)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hello next.js</p>
        <Link href={`/starwars`}>StatWars</Link>
 
        <p>from envvar {process.env.NEXT_PUBLIC_ENV_SAMPLE}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Star Wars</h2>
        {data.allFilms.edges.map(record => (
          <div key={record.node.episodeID}>
            <p>Episode{record.node.episodeID} : {record.node.title}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}