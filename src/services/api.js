import axios from 'axios';


const api = axios.create({
    baseURL: 'https://backend-day-notes.vercel.app'
});

export default api;