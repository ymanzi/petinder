import axios from 'axios';

// const baseUrl = 'https://pettinder.herokuapp.com/';
const baseUrl = 'http://localhost:8080/';

const client = axios.create({
    baseURL: baseUrl,
});
export {client, baseUrl};