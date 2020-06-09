import React from "react";
import PizzaCard from "../PizzaCard";
import { arrayOf, shape, func } from "prop-types";
import { Typography, Grid } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza pour le moment...
      </Typography>
    );

  return (
    <Grid container justify="space-evenly" spacing={3}>
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <Grid key={id} item xs={6}>
          <PizzaCard
            name={name}
            ingredients={ingredients}
            imageUrl={imageUrl}
            price={price}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}
PizzaList.propTypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
  addToCart: func,
};
PizzaList.defaultProps = {
  data: [],
  addToCart: Function.prototypes,
};
