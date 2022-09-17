import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

// TODO: how to get shadows by typescript
// const DashboardNavbarRoot = styled(AppBar)<Theme>(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[3]
// }));

export default function Header() {
  return (
      <AppBar sx={{ boxShadow: '0px 1px 4px rgba(100, 116, 139, 0.12)', bgcolor: 'background.paper', left: { lg: 280 }, width: { lg: 'calc(100% - 280px)' } }} >
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
      {/* <AccountPopover anchorEl={settingsRef.current} open={openAccountPopover} onClose={() => setOpenAccountPopover(false)} /> */}
      </AppBar>
  );
}