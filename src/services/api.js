import axios from 'axios';


const api = axios.create({
    baseURL: 'https://daynotes-backend.herokuapp.com'
});

export default api;