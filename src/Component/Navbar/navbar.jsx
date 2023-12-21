
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the ExitToApp icon
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', link: '/Home', icon: <HomeIcon /> },
  { label: 'Pets', link: '/Pets', icon: <PetsOutlinedIcon /> },
  { label: 'Accessories', link: '/Accessories', icon: <StorefrontOutlinedIcon /> },
  { label: 'Food', link: '/Food', icon: <FastfoodOutlinedIcon /> },
  { label: 'About', link: '/About', icon: <AccountBoxOutlinedIcon /> },
];

const settings = [
  { label: 'Profile', link: '/Profile', icon: <AccountBoxOutlinedIcon /> },
  { label: 'Settings', link: '/Settings', icon: <SettingsIcon /> },
  { label: 'Logout', link: '/Login', icon: <ExitToAppIcon /> },
];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: '#333', color: '#fff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/Home"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <PetsIcon sx={{ fontSize: 32, marginRight: 1 }} />
              happyTails
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.link}
                  sx={{ my: 2, color: '#ccc' }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* Use the AccountCircle icon instead of Avatar */}
                  <AccountCircleIcon sx={{ fontSize: 32, color: '#fff' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                    <Link to={setting.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{setting.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: '200px' } }}
      >
        <List>
          {pages.map((page) => (
            <ListItem button key={page.label} component={Link} to={page.link} onClick={toggleDrawer(false)}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
          {/* Add the Logout item to the sidebar */}
          <ListItem button key={settings[0].label} component={Link} to={settings[0].link} onClick={toggleDrawer(false)}>
            <ListItemIcon>{settings[0].icon}</ListItemIcon>
            <ListItemText primary={settings[0].label} />
          </ListItem>
        </List>
      </Drawer>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.label} onClick={handleCloseNavMenu}>
            <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography textAlign="center">{page.label}</Typography>
            </Link>
          </MenuItem>
        ))}
        {/* Add the Logout item to the mobile menu */}
        <MenuItem key={settings[0].label} onClick={handleCloseNavMenu}>
          <Link to={settings[0].link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography textAlign="center">{settings[0].label}</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;

