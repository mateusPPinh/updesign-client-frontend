import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export const umbriel_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_UMBRIEL_API
});

export default api;
