import React from "react";
import './ItemTexto.css'
import ItemDescricao from "../ItemDescricao";
import ItemTitulo from "../ItemTitulo";

function ItemTexto(props) {
  return (
    <div className="texto-item">
      <ItemTitulo
        nomeItem="PHB780-XS, INVERSOR FV MONO 220V/1MPPT/DPS II"
        codigo="6000011204"
        tensao="Inversor monofásico 220V"
      />
      <ItemDescricao />
    </div>
  );
}

export default ItemTexto;
