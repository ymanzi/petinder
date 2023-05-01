import {baseUrl} from "../api/Client";
import {useState} from "react";
import PetInformation from "./PetInformation";
import {getPets} from "../services/PetService";

const ProfileGallery = ({pets, onPetsChange}) => {

    const [selectedPet, setSelectedPet] = useState(null);

    const onDeletePet = () => {
        setSelectedPet(null);
        getPets()
            .then(result => onPetsChange(result.data));
    }

    return (
        <div>
            {pets.map((pet) => (
                <div
                    className="gallery-pet fader"
                    key={pet.id}
                    onClick={() => (setSelectedPet(pet))}
                >
                    <img
                        src={baseUrl + pet.image}
                        className="profile-picture"
                        alt="pet"
                        onClick={() => (setSelectedPet(pet))}
                    />
                    <div className="overlay"
                         onClick={() => (setSelectedPet(pet))}
                    >
                        <div className="overlay-text">{pet.name}</div>
                    </div>
                </div>
            ))}
            {selectedPet &&
                <PetInformation pet={selectedPet} onDeletedPet={onDeletePet}/>}
        </div>
    );
};

export default ProfileGallery;