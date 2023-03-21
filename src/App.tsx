import { useState } from "react";
import ButtonAdd from "./components/buttonAdd";
import Formulaire from "./components/formulaire";
import TableauProduits from "./components/tableauProduits";

function App() {
  const [page, setPage]: any = useState("");
  const buttonAdd = () => {
    if (page === "") {
      return <ButtonAdd setPage={setPage} />;
    } else return <Formulaire setPage={setPage} />;
  };

  return (
    <>
      <div className="p-3 fs-3 fw-light bg-primary text-white" id="ajoutProd">
        Produits
      </div>

      <div>{buttonAdd()}</div>

      {/* Affichage de la liste des produits */}
      <TableauProduits />
    </>
  );
}

export default App;
