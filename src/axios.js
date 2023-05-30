import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://642566eb7ac292e3cfff9ed9.mockapi.io/items',
});

export default instance;
