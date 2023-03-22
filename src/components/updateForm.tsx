import { Tproduit } from "../types/produit.type";
import { useState } from "react";

function UpdateForm(props: { setPage: any; updateProd: Tproduit | undefined }) {
  const newProduit: Tproduit = {
    id: props.updateProd!.id,
    nom: props.updateProd!.nom,
    prix: props.updateProd!.prix,
    quantite: props.updateProd!.quantite,
  };

  const [produit, setProduit] = useState(newProduit);
  const urlUpProduit = `http://localhost:3000/produits/${props.updateProd?.id}`;

  const inputChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    if (name === "nom") {
      return setProduit({ ...produit, [name]: value });
    } else {
      setProduit({ ...produit, [name]: +value });
    }
  };

  const upProduct = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e);

    async function fetchData() {
      console.log(produit);

      const response = await fetch(urlUpProduit, {
        method: "PATCH",
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
    <div>
      <div className="border m-5 p-3">
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput"
            className="form-label fw-semibold"
          >
            Nom
          </label>
          <input
            type="text"
            onChange={(e) => inputChange(e)}
            defaultValue={props.updateProd?.nom}
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
            type="text"
            onChange={(e) => inputChange(e)}
            name="prix"
            defaultValue={JSON.stringify(props.updateProd?.prix)}
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
            type="text"
            onChange={(e) => inputChange(e)}
            name="quantite"
            defaultValue={JSON.stringify(props.updateProd?.quantite)}
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

              upProduct(e);

              window.location.reload();
            }}
          >
            Modifier
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
    </div>
  );
}
export default UpdateForm;
