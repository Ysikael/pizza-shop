import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { func, number } from "prop-types";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import routes from "../App/routes";

export default function Header({ ShoppingCartCount }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6"
          component={Link}
          className={classes.title}
          to={routes.home.path}
        >
          Pizzeria Basilik
        </Typography>
        <IconButton
          aria-label={`${ShoppingCartCount} Pizzas`}
          color="inherit"
          component={Link}
          to={routes.cart.path}
        >
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
  displayPopinCart: func,
};
