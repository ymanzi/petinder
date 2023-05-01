import {useEffect, useState} from "react";
import ProfileGallery from "./ProfileGallery";
import {SearchBar} from "./SearchBar";

const Main = () => {
    const [pets, setPets] = useState([]);

    const compareName = (petA, petB) => {
        return petA.name.localeCompare(petB.name);
    }

    const onChangeOfPets = (newPets) => {
        setPets(newPets.sort(compareName));
    };

    return (
        <>
            <SearchBar onPetsChange={onChangeOfPets}/>
            <ProfileGallery pets={pets} onPetsChange={onChangeOfPets}/>
        </>
    );
}

export default Main;