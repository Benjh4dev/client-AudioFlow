import axios from 'axios';
const port = 3002;

const api = axios.create({
  baseURL: `http://localhost:${port}/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;