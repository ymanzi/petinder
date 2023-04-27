import {useEffect, useState} from "react";
import getPets from "../services/PetService";
import {baseUrl} from "../api/Client";

const ProfileGallery = ({pets}) => {
    // const [pets, setPets] = useState([]);

    // useEffect(() => {
    //     getPets()
    //         .then(result => {setPets(result.data)})
    // }, []);

    return (<div>
        {pets.map((pet) => (
                <div
                    className="gallery-pet fader"
                    key={pet.id}
                >
                    <img
                        src={baseUrl + pet.image}
                    className="profile-picture"
                    alt="pet"
                    />
                    <div className="overlay">
                        <div className="overlay-text">{pet.name}</div>
                    </div>
                </div>
                            ))}
                        </div>);
};

export default ProfileGallery;