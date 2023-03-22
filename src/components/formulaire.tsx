//Composant: formulaire qui permet d'ajouter un produit avec la methode "POST"

import { useState } from "react";
import { Tproduit } from "../types/produit.type";

function Formulaire(props: { setPage: any }) {
  const newProduit: Tproduit = {
    id: 0,
    nom: "",
    prix: 0,
    quantite: 0,
  };

  const [produit, setProduit] = useState(newProduit);
  const urlAddProduit = "http://localhost:3000/produits";

  const inputChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    if (name === "nom") {
      return setProduit({ ...produit, [name]: value });
    } else {
      setProduit({ ...produit, [name]: +value });
    }
  };

  const newProduct = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e);

    async function fetchData() {
      console.log(produit);

      const response = await fetch(urlAddProduit, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(produit),
      });
      const responseJson = await response.json();

      alert(responseJson.message);
    }

    fetchData();
  };

  return (
    <div className="border m-5 p-3">
      <div className="mb-3">
        <label
          htmlFor="formGroupExampleInput"
          className="form-label fw-semibold"
        >
          Nom
        </label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          className="form-control"
          name="nom"
          id="formGroupExampleInput"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="formGroupExampleInput2"
          className="form-label fw-semibold"
        >
          Prix
        </label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="prix"
          className="form-control"
          id="formGroupExampleInput2"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="formGroupExampleInput2"
          className="form-label fw-semibold"
        >
          Quantité
        </label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="quantite"
          className="form-control"
          id="formGroupExampleInput2"
          required
        />
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={(e) => {
            props.setPage("");

            newProduct(e);

            window.location.reload();
          }}
        >
          Ajouter
        </button>
        <button
          className="btn btn-warning ms-5"
          type="button"
          onClick={() => props.setPage("cancel")}
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
export default Formulaire;
