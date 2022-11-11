import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'dory.token': token } = parseCookies();

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:3000',
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;