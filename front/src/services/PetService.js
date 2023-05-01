import {client} from "../api/Client"
const getPets = () => {
    console.log("getPets");
    return client.get('pets');
}

const addPet = (form) => {
    client.post(
        'pets',
        {
            "id": undefined,
            "name": form.name,
            "kind": form.kind,
            "image": form.image,
            "profileText": form.profileText,
            "popularity" : 0
        }
    );
}

const deletePet = (id) => {
    return client.delete(`pets/${id}`);
}

const incrementPopularity = (name) => {
    return client.get(`pets/${name}/incrementPopularity`);
}


export {getPets, addPet, deletePet, incrementPopularity};