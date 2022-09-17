import Head from 'next/head';
import { AppBar } from '@mui/material';
import styled from '@emotion/styled';
import styles from './layout.module.css';
import Link from 'next/link';
import { Theme } from '@mui/material/styles';
import Header from './header';
import { SideBar } from './sidebar';

export const siteTitle = 'Next.js Sample Website';

const DashboardNavbarRoot = styled(AppBar)(( theme:Theme) => ({
  // backgroundColor: theme.palette.background.paper,
  // boxShadow: theme.shadows[3]
}));

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI( siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <SideBar/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}