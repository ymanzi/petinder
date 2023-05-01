import {deletePet} from "../services/PetService";
import {Link} from "react-router-dom";

const PetInformation = ({pet, onDeletedPet}) => {

    const {id, name, profileText, popularity} = pet;
    const handleDelete = (id) => {
        deletePet(id)
            .then(() => onDeletedPet())
            .catch(error => console.log(error.message));
    };

    return (<div className="gallery-detail">
        <section className="tiny-dialog fader" id="petProfile">
            <h3> {name} </h3>
            <p> {profileText}$ </p>
            <p>
                Popularity: {popularity}
            </p>

            <button
                className="btn btn-primary pull-right"
                onClick={() => handleDelete(id)}
            type="button"
            >
            Delete Pet
        </button>
                <Link to="/setupDate" state={{ selectedPet: pet }}>
                    Kudos
                </Link>
    </section>
</div>);
}

export default PetInformation;