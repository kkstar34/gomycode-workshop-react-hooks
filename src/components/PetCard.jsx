

const PetCard = ({pet, handleAdopted}) => {



    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdopted(pet.id);
    }






    return (
        <div className="col-md-3" >

            <div className="card"  >
            <img src={pet.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p>
                    <span className="badge bg-secondary">{pet.location} <i className="fas fa-map-marker-alt"></i></span>
                    <span className="badge bg-success ms-1">{pet.race}</span>
                    <span className="badge bg-warning text-dark ms-1">{pet.type}</span>
                </p>
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.adopted ? "adopted" : "Disponible"}</p>
                <a href="#" className={pet.adopted ? "btn btn-danger" : "btn btn-primary"} onClick={handleSubmit}>{pet.adopted ? "Adopted" : "Adopt"}</a>


            </div>
            </div>

        </div>
    )


}

export default PetCard;