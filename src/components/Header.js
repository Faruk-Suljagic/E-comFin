import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

import "../css/Header.css";

const Header = (props) => {
  return (
    <div className="Container">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">BerBea-Bags</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
