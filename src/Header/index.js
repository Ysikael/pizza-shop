import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ ShoppingCartCount }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pizzeria Basilik
        </Typography>
        <IconButton aria-label={`${ShoppingCartCount} Pizzas`} color="inherit">
          <Badge badgeContent={ShoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  ShoppingCartCount: 0,
};

Header.propTypes = {
  ShoppingCartCount: number,
};
