import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import { arrayOf, number, string, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import IconButton from "@material-ui/core/IconButton";
import Price from "../Price";
import { PIZZAS_MAX_COUNT } from "../pizzas";
import { useCounter } from "react-use";

const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: imageSize,
    margin: `${theme.spacing(2)}px`,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
  const classes = useStyles();

  const [pizzaCount, { dec, inc }] = useCounter(1, PIZZAS_MAX_COUNT, 1);

  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={imageUrl}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />
        </Typography>
        <IconButton aria-label="moins" onClick={() => dec()}>
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
        <span>{pizzaCount}</span>
        <IconButton aria-label="plus" onClick={() => inc()}>
          <AddBoxIcon fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => {
            addToCart({ id, name, price, addedAt: Date.now() });
          }}
        >
          Ajouter au panier
        </Button>
      </CardActions>
    </Card>
  );
}

PizzaCard.propTypes = {
  id: Number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  onClick: func,
};

PizzaCard.defaultProps = {
  imageUrl: null,
};
