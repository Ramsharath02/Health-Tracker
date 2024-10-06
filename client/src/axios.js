import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // This is where your API is running
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
