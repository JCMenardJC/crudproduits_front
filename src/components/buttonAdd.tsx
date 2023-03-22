//Composant: Bouton qui permet d'afficher le formulaire d'Ajout d'un produit

function ButtonAdd(props: { setPage: any }) {
  return (
    <div>
      <button
        type="button"
        className="m-4 p-2 fs-5 fw-light btn btn-primary"
        onClick={() => {
          props.setPage("formulaire");
        }}
      >
        Ajouter un produit
      </button>
    </div>
  );
}
export default ButtonAdd;
