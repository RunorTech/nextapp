import axios from 'axios';

// Create an instance of Axios with default configurations
const api = axios.create({
  baseURL: 'https://game-truth-or-dare.onrender.com', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need here
  },
});

// Optional: Add request interceptors
api.interceptors.request.use(
  config => {
    // Add any custom request logic here, such as adding auth tokens
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
