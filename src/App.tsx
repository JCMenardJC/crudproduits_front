import { useState } from "react";
import ButtonAdd from "./components/buttonAdd";
import Formulaire from "./components/formulaire";
import TableauProduits from "./components/tableauProduits";
import UpdateForm from "./components/updateForm";
import { Tproduit } from "./types/produit.type";

function App() {
  const [updateProd, setUpdateProd] = useState<Tproduit>();
  const [page, setPage]: any = useState("");
  const buttonAdd = () => {
    if (page === "") {
      return <ButtonAdd setPage={setPage} />;
    } else {
      return page === "formulaire" && <Formulaire setPage={setPage} />;
    }
  };

  return (
    <div>
      <div className="p-3 fs-3 fw-light bg-primary text-white" id="ajoutProd">
        Produits
      </div>

      {/* Affichage du bouton "Ajouter" avec une constante définie en haut de la fonction */}
      <div>{buttonAdd()}</div>

      {/*  Affichage du boutton "Ajouter" */}
      {page === "cancel" && <ButtonAdd setPage={setPage} />}

      {/* Affichage du formulaire pour une modification de produit */}
      {page === "updateForm" && (
        <UpdateForm setPage={setPage} updateProd={updateProd} />
      )}

      {/* Affichage de la liste des produits dans un tableau*/}
      <TableauProduits setPage={setPage} setUpdateProd={setUpdateProd} />
    </div>
  );
}

export default App;
