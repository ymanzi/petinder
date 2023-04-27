import {client} from "../api/Client"
const getPets = () => {
    return client.get('pets');
}

export default  getPets;