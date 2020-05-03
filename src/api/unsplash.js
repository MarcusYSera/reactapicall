import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -NdQzxuQDJguGVhl5A16dsGK4FwNANDdEpe3NYQ2-PY',
  },
});
