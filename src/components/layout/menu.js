import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';


export const menuItems = (
  <div>
    <ListItem to="/productos" component={Link}>
      <ListItemIcon>
        <RestaurantMenuOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Menú" />
    </ListItem> 
    <ListItem to="/clientes" component={Link}>
      <ListItemIcon>
        <ListAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Su Orden" />
    </ListItem> 
  </div>
);
