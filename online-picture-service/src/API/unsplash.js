import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID a0759896d05f29125ced15558d69bf438808d2e11feb6b3bc2b55e52a1b0c192'
  }
});