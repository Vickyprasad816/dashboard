import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';

const drawerWidth = 249;

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >


        <List sx={{ bgcolor: '#251777', color: '#E0E0E0', }} >
          {['Dashboard', 'Manage Subscription', 'Young Brain', 'Mid Carrer', 'Vendor', 'Consultant', 'Reports', 'Sign Out'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon sx={{ color: 'whitesmoke' }} >
                  {index === 0 && <GridViewIcon />}
                  {index === 1 && <BusinessCenterRoundedIcon />}
                  {index === 2 && <BusinessCenterRoundedIcon />}
                  {index === 3 && <BusinessCenterRoundedIcon />}
                  {index === 4 && <BusinessCenterRoundedIcon />}
                  {index === 5 && <BusinessCenterRoundedIcon />}
                  {index === 6 && <GridViewIcon />}
                  {index === 7 && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

    </Box>
  );
}