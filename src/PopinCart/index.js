import { bool } from "prop-types";
import Popin from "../Popin";

import React from "react";

export default function PopinCart({ open }) {
  const actions = [{ label: "Annuler" }, { label: "Commander", primary: true }];

  return (
    <Popin open={open} title="Passer commande" actions={actions}>
      Récaputilatifs des commandes
    </Popin>
  );
}

PopinCart.propTypes = {
  open: bool,
};

PopinCart.defaultProps = {
  open: false,
};
