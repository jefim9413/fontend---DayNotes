import axios from 'axios';


const api = axios.create({
    baseURL: 'backend-day-notes.vercel.app'
});

export default api;