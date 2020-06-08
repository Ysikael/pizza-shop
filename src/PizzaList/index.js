import React from "react";
import PizzaCard from "../PizzaCard";
import { arrayOf, shape } from "prop-types";
import { Typography } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza pour le moment...
      </Typography>
    );

  return (
    <>
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <PizzaCard
          key={id}
          name={name}
          ingredients={ingredients}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </>
  );
}
PizzaList.propTypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
};
PizzaList.defaultProps = {
  data: [],
};
