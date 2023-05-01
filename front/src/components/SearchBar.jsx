import {useEffect, useState} from "react";
import {getPets} from "../services/PetService";
import AddPet from "./AddPet";

export const SearchBar = ({onPetsChange}) => {
    const [filterText, setFilterText] = useState("");
    const [addPetStat, setAddPetStat] = useState("");

    const onAddPet = (newState) => {
        setAddPetStat(newState);
    };
    const filterPets = (pets) => {
        return pets.filter(pet => pet.name.includes(filterText));
    }

    useEffect(()=>{
        getPets()
            .then(result => filterPets(result.data))
            .then(filteredPets => onPetsChange(filteredPets));
    }, [filterText, addPetStat]);

    return (<div className="col-md-3">
        <div className="gallery-detail">
            <div>
                <section className="tiny-dialog">
                    <h3>Find your pet</h3>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            value={filterText}
                            onChange={(event) => setFilterText(event.target.value)}
                            placeholder="Name"
                        />
                    </div>
                </section>
            </div>
        </div>
        <AddPet onAddPet = {onAddPet} />
    </div>);
}