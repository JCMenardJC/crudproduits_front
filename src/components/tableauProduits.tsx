import React, { useEffect, useState } from "react";
import { Tproduit } from "../types/produit.type";

function TableauProduits() {
  const [prod, setProd]: any = useState();

  const baseUrl = "http://localhost:3000/produits";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  useEffect(() => {
    fetch(baseUrl, options)
      .then((response) => response.json())
      .then((donnee) => setProd(donnee))

      .catch((erreur) => `${erreur}`);
  }, []);
  console.log(prod);

  const test = prod?.map((data: Tproduit, i: number) => (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.nom}</td>
      <td>{data.prix}</td>
      <td>{data.quantite}</td>
      <td>
        <button type="button" className="btn btn-primary me-1">
          Editer
        </button>
        <button type="button" className="btn btn-danger">
          Supprimer
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="m-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Quantité</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{test}</tbody>
      </table>
    </div>
  );
}
export default TableauProduits;
