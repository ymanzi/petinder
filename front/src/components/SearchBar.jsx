import {useEffect, useState} from "react";
import getPets from "../services/PetService";

export const SearchBar = ({onPetsChange}) => {

    const [filterText, setFilterText] = useState("");

    function compareName(petA, petB){
        return petA.name.localeCompare(petB.name);
    }

    useEffect(()=>{
        getPets()
            .then(result => onPetsChange(result.data.filter(pet => pet.name.includes(filterText)).sort(compareName)));
    }, [filterText]);

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
    </div>);
}