import {useEffect, useState} from "react";
import {getPets} from "../services/PetService";
import AddPet from "./AddPet";

export const SearchBar = ({onPetsChange}) => {

    const [filterText, setFilterText] = useState("");
    const [addPetStat, setAddPetStat] = useState("");
    function compareName(petA, petB){
        return petA.name.localeCompare(petB.name);
    }

    const onAddPet = (newstate) => {
        setAddPetStat(newstate);
    };

    useEffect(()=>{
        getPets()
            .then(result => onPetsChange(result.data.filter(pet => pet.name.includes(filterText)).sort(compareName)));
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