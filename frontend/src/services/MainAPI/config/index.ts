import axios from 'axios';


const baseUrl = axios.create({
  baseURL: 'https://backend-xp.herokuapp.com/',
});

export default baseUrl;