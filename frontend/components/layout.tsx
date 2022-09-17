import Head from 'next/head';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './layout.module.css';
import Link from 'next/link';
import { Theme } from '@mui/material/styles';

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
      <DashboardNavbarRoot sx={{ left: { lg: 280 }, width: { lg: 'calc(100% - 280px)' } }} >
        <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }} >
          <IconButton onClick={() => {}} sx={{ display: { xs: 'inline-flex', lg: 'none' } }} >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              {/* <UsersIcon fontSize="small" /> */}
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot" >
                {/* <BellIcon fontSize="small" /> */}
              </Badge>
            </IconButton>
          </Tooltip>
          {/* <Avatar onClick={() => setOpenAccountPopover(true)} ref={settingsRef} sx={{ cursor: 'pointer', height: 40, width: 40, ml: 1 }} src="/static/images/avatars/avatar_1.png" > */}
            {/* <UserCircleIcon fontSize="small" /> */}
          {/* </Avatar> */}
        </Toolbar>
      </DashboardNavbarRoot>
      {/* <AccountPopover anchorEl={settingsRef.current} open={openAccountPopover} onClose={() => setOpenAccountPopover(false)} /> */}
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