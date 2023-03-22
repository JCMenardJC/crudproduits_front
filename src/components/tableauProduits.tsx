/* Composant : Tableau qui permet d'afficher les produits présent dans la base de donnée.
Chaques lignes présentes le produit (id, nom, prix, quantité) avec un bouton pour modifier le produit en affichant le formulaire avec les onfos produit
et un autre bouton permettant de supprimer un produit avec la methode "DELETE". */

import React, { useEffect, useState } from "react";
import { Tproduit } from "../types/produit.type";

function TableauProduits(props: { setPage: any; setUpdateProd: any }) {
  const [prod, setProd] = useState<Tproduit[]>();

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
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => {
            props.setPage("updateForm");
            props.setUpdateProd(data);
          }}
        >
          Editer
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={async function deletePost() {
            await fetch(`http://localhost:3000/produits/${data.id}`, {
              method: "DELETE",
            });
            window.location.reload();
          }}
        >
          Supprimer
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="m-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Qté</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{test}</tbody>
      </table>
    </div>
  );
}
export default TableauProduits;
