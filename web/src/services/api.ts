import axios from 'axios';
//Comunicação com a API do backend
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;