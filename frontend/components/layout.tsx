import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import { SideBar } from './sidebar';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
export const siteTitle = 'Next.js Sample Website';
import { styled } from '@mui/material/styles';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex', flex: '1 1 auto', maxWidth: '100%', paddingTop: 64, [theme.breakpoints.up('lg')]: { paddingLeft: 280 }
}));

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI( siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <SideBar/>
      <DashboardLayoutRoot>
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', width: '100%' }} >
          <main>{children}</main>
        </Box>
      </DashboardLayoutRoot>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}