import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8082/scene', // Reemplaza esta URL con la URL de tu API en Spring Boot
});

export default api;