import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-desserts-api.onrender.com',
});

export default instance;
