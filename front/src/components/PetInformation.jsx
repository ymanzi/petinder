import {deletePet} from "../services/PetService";

const PetInformation = (props) => {

    const {id, name, profileText, popularity} = props.pet;
    const handleDelete = (id) => {
        console.log("HandleDelete called");
        deletePet(id)
            .then(() => props.onDeletedPet())
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
    </section>
</div>);
}

export default PetInformation;