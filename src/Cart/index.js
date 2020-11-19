import { arrayOf, shape, number, string } from "prop-types";
import {
  TableContainer,
  TableCell,
  TableRow,
  Table,
  TableHead,
  Paper,
  TableBody,
  Typography,
} from "@material-ui/core";
import { isEmpty } from "ramda";
import React from "react";
import Price from "../Price";

export default function Cart({ cart }) {
  if (isEmpty(cart)) return <Typography>"pas de pizzas"</Typography> ;

  return (
        <TableContainer component={Paper}>
          <Table
            //className={classes.table}
            size="small"
            aria-label="Ma commande de Pizzas:"
          >
            <TableHead>
              <TableRow>
                <TableCell>Pizza</TableCell>
                <TableCell align="right">Prix</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(({ addedAt, name, price }) => (
                <TableRow key={addedAt}>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="right">
                    <Price value={price} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}

Cart.propTypes = {
  cart: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      addedAt: number,
    })
  ),

};

Cart.defaultProps = {
  cart: [],
};
