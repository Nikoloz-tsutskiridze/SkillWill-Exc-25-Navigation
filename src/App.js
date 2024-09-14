import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavigationLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const menuItems = ["Home", "About", "Services", "Contact"];

  const sideList = (
    <div>
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">App Navigation</Typography>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid item container direction="row">
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {sideList}
        </Drawer>
      </Grid>
    </Grid>
  );
}

export default NavigationLayout;
