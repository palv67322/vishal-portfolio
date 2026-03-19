import axios from 'axios';

// Yeh line apne aap check karegi ki .env mein kya URL hai.
// Agar .env nahi mila, toh default localhost:5000 le lega.
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Agar aage chalkar portfolio admin panel banaya aur token ki zaroorat padi, toh wo yahan se jayega
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;