import { useState } from "react";

function Formulaire() {
  const [page, setPage]: any = useState("");
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
          type="text"
          className="form-control"
          id="formGroupExampleInput"
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
          className="form-control"
          id="formGroupExampleInput2"
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
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </div>
    </div>
  );
}
export default Formulaire;
