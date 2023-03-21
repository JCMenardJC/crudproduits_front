import { useState } from "react";
import Formulaire from "./components/formulaire";

function App() {
  const [page, setPage]: any = useState("");

  return (
    <div>
      <div className="p-3 fs-3 fw-light bg-primary text-white" id="ajoutProd">
        Produits
      </div>
      <button
        type="button"
        className="m-4 p-2 fs-5 fw-light btn btn-primary"
        onClick={() => setPage("formulaire")}
      >
        Ajouter un produit
      </button>
      {page === "formulaire" && <Formulaire></Formulaire>}
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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Test</td>
              <td>599</td>
              <td>10</td>
              <td>
                <button type="button" className="btn btn-primary me-1">
                  Editer
                </button>
                <button type="button" className="btn btn-danger">
                  Supprimer
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Test 2</td>
              <td>245</td>
              <td>3</td>
              <td>
                <button type="button" className="btn btn-primary me-1">
                  Editer
                </button>
                <button type="button" className="btn btn-danger">
                  Supprimer
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Test 3</td>
              <td>129</td>
              <td>2</td>
              <td>
                <button type="button" className="btn btn-primary me-1">
                  Editer
                </button>
                <button type="button" className="btn btn-danger">
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
